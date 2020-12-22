import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 userFName: {
    type: String,
    required: true,
 },
 userLName: {
    type: String,
    required: true,
 },
 userPhone: {
    type: Number,
    required: true,
 },
 userEmail: {
    type: String,
    required: true,
 },
 userCNIC: {
   type: Number,
   required: true,
},
accUserName: {
   type: String,
   required: true,
},
 userPass: {
   type: String,
   required: true,
}
//timestamps: true



});

const user = mongoose.model("user", userSchema)
export default user;