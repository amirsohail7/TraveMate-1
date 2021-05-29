import mongoose from 'mongoose';

const travelerSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    },
 
 age: {
   type: Number,
   required: true,
    },
 dob: {
    type:Date,
    required: true,

    },
 email:{
     type:String,
     required:true,
    },
 password:{
     type:String,
     required:true,
    },
 phone:{
     type:Number,
     required:true,
    },
 interests:{
   citiesVisited:[String],
   activities:[String],
   bookmarks:[Number],
   Likes:[Number],
    
 },
 //timestamps: true



});

const Traveler = mongoose.model("Traveler", travelerSchema)
export default Traveler;