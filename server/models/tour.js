import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  Departure: {
    type: Date,
    required: true,
  },
  DepartureLocation: {
    type: String,
    required: true,
  },

  Price: {
    type: Number,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    //required: true,
  },
  tourStatus: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  photos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MultipleFile",
    //required: true,
  },

  //timestamps: true
});

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
