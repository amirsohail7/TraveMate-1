import { Router } from "express";
import {
  all_travelers,
  specific_traveler,
  create_traveler,
  delete_traveler,
  update,
} from "../controllers/travelerController.js";

const router = Router();

router.get("/", all_travelers);
router.get("/:id", specific_traveler);
router.post("/create_traveler", create_traveler);
router.put("/update/:id", update);
router.delete("/delete/:id", delete_traveler);

export default router;
