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

const Destination = mongoose.model("Destination", destinationSchema)
export default Destination;