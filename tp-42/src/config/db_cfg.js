import dotenv from "dotenv";

dotenv.config({
    path:"./.env",
});

export default {
    uri : process.env.DB_URI,
    user : process.env.DB_USER,
    pass : process.env.DB_PASS,
    dbName : process.env.DB_NAME
};