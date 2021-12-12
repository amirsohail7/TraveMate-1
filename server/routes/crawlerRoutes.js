import { Router } from "express";
import {bot} from "../controllers/crawlerController.js"
const router = Router();
router.get("/bot",bot);
export default router;
