import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Traveler",
    required: true,
  },

  comments: [
    {
      comment: String,
      author: String,
    },
  ],

  likes: {
    type: Number,
  },

  views: {
    type: Number,
  },

  //timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
