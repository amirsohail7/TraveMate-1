import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
 name:{
   type:String,
   required: true,
 },

 city:{
   type:String,
   required: true,
 },
 
 address:{
   type:String,
   required: true,
 },

 phone:{
   type:Number,
   required: true,
 },

 email:{
   type:String,
   required: true,
 },

 description:{
   type:String,
   required: true,
 },

 rating:{
    type:String,
    required: true,
 },
 
 category: {
    type: String,
    required: true,
 },
 
 priceRange: {
   type: String,
   required: true,
},
 menu: {
    type:String,

 },

 openingTime:{
   type:String,
   required: true,
 },

 closingTime:{
   type:String,
   required: true,
 },

 daysOpen:{
   type:String,
   required: true,
 },

 provider:{
   type:mongoose.Schema.Types.ObjectId,
   ref: 'Provider',
 }





});

const Restaurant = mongoose.model("Restaurant", restaurantSchema)
export default Restaurant;