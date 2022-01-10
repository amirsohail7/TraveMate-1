import { Router } from "express";
import {
  restaurant_get,
  restaurant_create,
  restaurant_get_detailed,
  specific_restaurant,
  delete_restaurant,
  add_review,
  top_restaurants,
  update,
  count_restaurants

} from "../controllers/restaurantController.js";

const router = Router();

router.get("/", restaurant_get);
router.get("/detailed", restaurant_get_detailed);
router.get("/count", count_restaurants);
router.get("/:id", specific_restaurant);
router.get("/top/:city", top_restaurants);
router.post("/create", restaurant_create);
router.put("/update/:id", update);
router.put("/:sid/AddReview/:rid", add_review);
router.delete("/delete/:id", delete_restaurant);

export default router;
