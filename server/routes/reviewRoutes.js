import express from "express";
import { Router } from "express";
import {
  all_reviews,
  all_reviews_detailed,
  specific_reviews,
  create_review,
  delete_review,
  add_provider,
} from "../controllers/reviewController.js";

const router = Router();

router.get("/", all_reviews);
router.get("/detailed", all_reviews_detailed);
router.get("/:id", specific_reviews);
router.post("/create_review", create_review);
router.put("/:tid/provider/:pid", add_provider);
router.delete("/delete/:id", delete_review);

export default router;
