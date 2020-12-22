import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
 tourName: {
    type: String,
    required: true,
 },
 tourDest: {
    type: String,
    required: true,
 },
 tourDepart: {
    type: String,
    required: true,
 },
 tourCost: {
    type: Number,
    required: true,
 },
 tourProvider: {
   type: String,
   required: true,
},
tourStatus: {
   type: Number,
   required: true,
},

//timestamps: true


});

const tour = mongoose.model("tour_directory", tourSchema)
export default tour;