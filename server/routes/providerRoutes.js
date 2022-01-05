import { Router } from "express";
import {
  update,
  all_providers,
  all_providers_detailed,
  create_provider,
  delete_provider,
  specific_provider,
  add_restaurant,
  add_hotel,
  add_tour,
} from "../controllers/providerController.js";

const router = Router();

router.get("/", all_providers);
router.get("/detailed", all_providers_detailed);
router.get("/:id", specific_provider);
router.post("/create_provider", create_provider);
router.put("/update/:id", update);
router.put("/restaurant/:sid/:rid", add_restaurant);
router.put("/hotel/:sid/:rid", add_hotel);
router.put("/tour/:sid/:rid", add_tour);
router.delete("/delete/:id", delete_provider);

export default router;
