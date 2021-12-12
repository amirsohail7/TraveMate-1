import { Router } from "express";
import { recRestaurant } from "../controllers/restaurantRecController.js";
const router = Router();
router.get("/recommendRestaurant/:userId", recRestaurant);
export default router;
