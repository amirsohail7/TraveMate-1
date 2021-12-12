import { Router } from "express";
import {salam} from "../controllers/webhookController.js"
const router = Router();

router.post("/salam", salam);
export default router;