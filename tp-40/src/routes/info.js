import { Router } from "express";
import controller from "../controllers/info-controller.js";

const router = Router();

router.get("/",controller.InfoController);

export default router;