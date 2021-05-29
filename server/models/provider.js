import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        },
    company: {
        type: String,
        
        },
    age: {
       type: Number,
       
        },
    dob: {
        type:Date,
        
        },
    email:{
         type:String,
         required: true,
        },

    password:{
         type:String,
         required: true,
        },
        
    phone:{
         type:Number,
         
        },

    services:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Destination',
        ref:'Hotel',
        ref:'Restaurant',   
       }],

 //timestamps: true



});

const Provider = mongoose.model("Provider", providerSchema)
export default Provider;