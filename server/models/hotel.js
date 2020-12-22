import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
 hotelName: {
    type: String,
    required: true,
 },
 hotelAddress: {
    type: String,
    required: true,
 },
 hotelServices: {
    type: Array,
    required: true,
 }
 //timestamps: true



});

const hotel = mongoose.model("hotel", hotelSchema)
export default hotel;