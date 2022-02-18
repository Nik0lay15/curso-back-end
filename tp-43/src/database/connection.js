import mongoose from "mongoose";
import cfg from "../config/db_cfg.js";
import logger from "../subscribers/logger.js";

const {uri,user,pass,dbName} = cfg;

class Connection {

    constructor(){
        this.client = mongoose;
    }

    async Connect(){
        try{
            logger.silly(`New connection to database`);
            await this.client.connect(uri,{user,pass,dbName});

        }catch(error){
            
        }
    }

    async Disconnect(){
        try{
            
        }catch(error){
            
        }
    }
}

export default new Connection();