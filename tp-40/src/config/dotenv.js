import dotenv from "dotenv";

const __dirname = process.cwd();

dotenv.config({
    path:__dirname+"/.env"
});

const PORT = process.env.PORT;

export default {
    PORT,
};