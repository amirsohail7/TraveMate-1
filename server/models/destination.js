import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
 destName: {
    type: String,
    required: true,
 },
 
destLocation: {
   type: String,
   required: true,
}
//timestamps: true


});

const destination = mongoose.model("destination", destinationSchema)
export default destination;