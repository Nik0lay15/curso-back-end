import express from "express";
import cluster from "cluster";
import {cpus} from "os";
import logger from "./src/test/logger.js";
import InfoRoute from "./src/routes/info.js";
import dotenv from "./src/config/dotenv.js";
import {engine} from "express-handlebars";

const app = express();
const __dirname = process.cwd();

app.use(express.json());
app.use("/CSS",express.static(__dirname+"/node_modules/bootstrap/dist/css"))
app.engine("hbs",engine({
    extname:".hbs",
    defaultLayout:"base.hbs",
    layoutsDir:__dirname+"/src/views/layouts",
}));
app.set("views",__dirname+"/src/views");
app.set("view engine","hbs");

app.use("/info",InfoRoute);

const port = dotenv.PORT;
const cores = cpus().length;
const mode = process.argv[2];

const setUpServer = ()=>{
    const SERVER = app.listen(port,()=>{
        logger.debug("Server up at "+port+", pid:" +process.pid);
    });
    SERVER.on("error",(error)=>{
        logger.error(new Error(error));
    }); 
};

if(mode == "cluster" || mode == "CLUSTER"){
    if(cluster.isPrimary){
        logger.debug("Starting Master Cluster at pid:",process.pid);
        for(let i=0;i<cores;i++){
            cluster.fork();
        }
    }else{
        setUpServer();
        cluster.worker.on("error",(error)=>{
            logger.warn("Worker died, id:",error);
        });
    }
}else{
    setUpServer();
}

export default app;
