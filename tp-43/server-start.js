import {cpus} from "os";
import cluster from "cluster";
import logger from "./src/subscribers/logger.js";
import cfg from "./src/config/srv_cfg.js";
import {app} from "./app.js";

const setUpServer = ()=>{
    const cores = cpus().length;
    const {port} = cfg;

    if(cluster.isPrimary){
        logger.silly("Starting master cluster, pid:",process.pid);
        for(let i=0;i<cores;i++){
            cluster.fork();
        }
    }else{
        app.listen(port,()=>{
            logger.silly(`Server up at port:${port}, pid:${process.pid}`);
        });
        cluster.worker.on("exit",(code,signal)=>{
            logger.warn(`Worker ${proces.pid} died, code:${code}`);
        });
    }
};

export default setUpServer;