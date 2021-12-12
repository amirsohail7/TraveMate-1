import { Router } from "express";
import { recHotel } from "../controllers/hotelRecController.js";
const router = Router();
router.get("/recommendHotel/:userId", recHotel);
export default router;
