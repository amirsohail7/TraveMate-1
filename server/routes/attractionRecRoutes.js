import { Router } from "express";
import { recAttraction } from "../controllers/attractionRecController.js";
const router = Router();
router.get("/recommendAttraction/:userId", recAttraction);
export default router;
