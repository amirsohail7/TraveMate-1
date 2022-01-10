import { Router } from "express";
import {
  add_review,
  all_attractions,
  all_attractions_detailed,
  create_attraction,
  delete_attraction,
  specific_attraction,
  update,
  count_attractions
} from "../controllers/attractionController.js";

const router = Router();

router.get("/", all_attractions);
router.get("/detailed", all_attractions_detailed);
router.get("/count", count_attractions);
router.get("/:id", specific_attraction);
router.post("/create_hotel", create_attraction);
router.put("/:sid/AddReview/:rid", add_review);
router.put("/update/:id", update);
router.delete("/delete/:id", delete_attraction);

export default router;
