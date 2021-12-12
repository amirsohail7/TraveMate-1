import { Router } from "express";
import {
  all_bookings,
  create_booking,
  specific_booking,
  all_bookings_detailed,
  delete_booking,
  update,
  services_bookings,
} from "../controllers/bookingController.js";

const router = Router();

router.get("/", all_bookings);
router.get("/detailed", all_bookings_detailed);
router.get("/:id", specific_booking);
router.get("/bookings/:pid", services_bookings);
router.post("/create_booking", create_booking);
router.put("/update/:id", update);
router.delete("/delete/:id", delete_booking);

export default router;
