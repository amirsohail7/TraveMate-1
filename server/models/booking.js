import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
 tourID: {
    type: Number,
    required: true,
 },
 
 userID: {
   type: String,
   required: true,
},
 providerID: {
    type:String,
    required: true,

 }

 //timestamps: true



});

const booking = mongoose.model("booking", bookingSchema)
export default booking;