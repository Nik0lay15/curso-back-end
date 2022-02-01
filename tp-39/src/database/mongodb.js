import mongoose from "mongoose";
import db_cfg from "../config/database.js";
import logger from "../test/logger.js";

const {host,password,user,dbname} = db_cfg;

class MongoClient {
    #client
    constructor(){
        client = mongoose;
    }

    async Connect(){
        try{
            await this.#client.Connect(host+dbname);
        }catch(error){
            logger.warn("Could not connect to database,",error);
        }
    }

    async Disconnect(){
        try{
            await this.#client.connection.close();
        }catch(error){
            logger.warn("Could not disconnect the client,",error);
        }
    }
}

export default new MongoClient();