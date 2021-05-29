import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
 Name: {
    type: String,
    required: true,
 },
 Destination: {
    type: String,
    required: true,
 },
 Departure: {
    type: Date,
    required: true,
 },
 DepartureLocation: {
   type: String,
   required: true,
},

 Price: {
    type: Number,
    required: true,
 },
 provider: {
   type: mongoose.Schema.Types.ObjectId,
   ref:'Provider',
   //required: true,
},
tourStatus: {
   type: String,
   required: true,
},
Description: {
   type: String,
   required: true,
},


//timestamps: true


});

const Tour = mongoose.model("Tour", tourSchema)
export default Tour;