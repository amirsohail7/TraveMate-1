"use strict";

import { Router } from "express";
import upload from "../helpers/upload.js";
import {
  singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles,
  specific_File,
  specific_Set,
} from "../controllers/fileuploaderController.js";
const router = Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/multipleFiles", upload.array("files"), multipleFileUpload);
router.get("/:id", specific_File);
router.get("/getSingleFiles", getallSingleFiles);
router.get("/set/:id", specific_Set);
router.get("/getMultipleFiles", getallMultipleFiles);

export default router;
