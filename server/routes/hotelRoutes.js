import { Router } from "express";
import {
  add_review,
  all_hotels,
  all_hotels_detailed,
  create_hotel,
  delete_hotel,
  specific_hotel,
  update,
  count_hotels
} from "../controllers/hotelController.js";

const router = Router();

router.get("/", all_hotels);
router.get("/detailed", all_hotels_detailed);
router.get("/count", count_hotels);
router.get("/:id", specific_hotel);
router.post("/create_hotel", create_hotel);
router.put("/update/:id", update);
router.put("/:sid/AddReview/:rid", add_review);

router.delete("/delete/:id", delete_hotel);

export default router;
