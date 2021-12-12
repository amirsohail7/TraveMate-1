import express from "express";
import { Router } from "express";
import {
  all_blogs,
  all_blogs_detailed,
  specific_blog,
  create_blog,
  delete_blog,
  add_comments,
} from "../controllers/blogController.js";

const router = Router();

router.get("/", all_blogs);
router.get("/detailed", all_blogs_detailed);
router.get("/:id", specific_blog);
router.post("/create_blog", create_blog);
router.put("/update/:id", add_comments);
router.delete("/delete/:id", delete_blog);

export default router;
