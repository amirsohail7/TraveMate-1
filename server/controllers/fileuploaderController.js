"use strict";
import SingleFile from "../models/singlefile.js";
import MultipleFile from "../models/multiplefile.js";

export async function singleFileUpload(req, res, next) {
  try {
    const file = new SingleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export async function multipleFileUpload(req, res, next) {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new MultipleFile({
      title: req.body.title,
      files: filesArray,
    });
    await multipleFiles.save();
    res.status(201);
    res.setHeader("Content-Type", "application/json");
    res.json(multipleFiles);
    console.log("images saved");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const specific_File = (req, res) => {
  SingleFile.find({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getallSingleFiles = async (req, res, next) => {
  try {
    const files = await find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const specific_Set = (req, res) => {
  MultipleFile.find({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getallMultipleFiles = async (req, res, next) => {
  try {
    const files = await find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};
