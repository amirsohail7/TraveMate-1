import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
 provider: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
      required:true,
 },  
 services: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Destination',
    ref:'Hotel',
    ref:'Restaurant',   
   }],

 price: {
    type:Number,
    required: true,

 }

 //timestamps: true



});

const Package = mongoose.model("Package" ,packageSchema)
export default Package;