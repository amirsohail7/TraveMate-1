import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },
  //timestamps: true
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;