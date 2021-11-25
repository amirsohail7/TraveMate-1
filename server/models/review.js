import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  likes: {
    type: Number,
    default: 0,
  },

  comment: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Traveler",
    required: true,
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
