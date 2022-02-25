import dotenv from "dotenv";

const __dirname = process.cwd();

dotenv.config({
    path:__dirname+"/.env"
});


export default {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    dbname:process.env.DB_NAME
};