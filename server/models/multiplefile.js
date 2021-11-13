import mongoose from "mongoose";

const mulitipleFileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [Object],
  },
  { timestamps: true }
);

const MultipleFile = mongoose.model("MultipleFile", mulitipleFileSchema);
export default MultipleFile;
