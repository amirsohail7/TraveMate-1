import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
 Title: {
    type: String,
    required: true,
 },
 Description: {
    type: String,
    required: true,
 },

 author: {
    type: String,
    required: true,
 },

 comments: [{
    comment: String,
    author: String,
    required: true,
 }],

 likes: {
    type: Number,
    required: true,
 },


//timestamps: true


});

const Blog = mongoose.model("Blog", blogSchema)
export default Blog;