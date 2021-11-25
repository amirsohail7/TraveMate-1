import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priceLevel: {
    type: String,
    required: true,
  },

  priceRange: {
    type: String,
    required: true,
  },

  hotelClass: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  amenities: [
    {
      type: String,
      required: true,
    },
  ],

  latitude: {
    type: String,
    required: true,
  },

  longitude: {
    type: String,
    required: true,
  },

  website: {
    type: String,
  },

  reviewsCount: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  rating: {
    type: Number,
    default: 0,
  },

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

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
