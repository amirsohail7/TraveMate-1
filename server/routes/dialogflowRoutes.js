import { Router } from "express";
import { textQuery,eventQuery } from "../controllers/dialogflowController.js";
const router = Router();

/* router.get("/serviceFetch/:city",serviceFetch); */
router.post("/textQuery", textQuery);
router.post("/eventQuery", eventQuery);
export default router;
