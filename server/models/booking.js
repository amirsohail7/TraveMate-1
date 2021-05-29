import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
 serviceType:{
    type:String,
    required: true,
 },

 services: {
   type:mongoose.Schema.Types.ObjectId,
   ref:'Destination',
   ref:'Hotel',
   ref:'Restaurant',   
  },
 
 traveler: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Traveler',
   required: true,
},

 provider: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,

 },
 paymentType:{
   type:String,
   required: true,
 },
 
 paymentStatus:{
   type:String,

 }

 //timestamps: true



});

const booking = mongoose.model("booking", bookingSchema)
export default booking;