import { Router } from "express";
import { makePayment } from "../controllers/paymentController.js";
const router = Router();

router.post("/", makePayment);

export default router;
