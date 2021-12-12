import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  latitude: {
    type: String,
    required: true,
  },

  longitude: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },

  website: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    //required: true,
  },

  photos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MultipleFile",
    //required: true,
  },
});

const Attraction = mongoose.model("Attraction", attractionSchema);
export default Attraction;
