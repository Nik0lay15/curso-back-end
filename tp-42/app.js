import express from "express";
import {engine} from "express-handlebars";
import setUpServer from "./server-start.js";

export const app = express();

setUpServer();

const __dirname = process.cwd();

app.engine("hbs",engine({
    extname:".hbs",
    defaultLayout:"base.hbs",
    layoutsDir:__dirname+"/src/views/layouts",
    partialsDir:__dirname+"/src/views/partials"
}));
app.set("view engine","hbs");
app.set("views",__dirname+"/src/views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/CSS",express.static(__dirname+"/node_modules/bootstrap/dist/css"));
app.use(express.static(__dirname+"/public"));