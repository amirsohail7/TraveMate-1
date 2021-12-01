import { Router } from "express";
import { hotel_rec } from "../controllers/hotelRecController.js";
const router = Router();
router.get("/hotel_rec", hotel_rec);
export default router;
