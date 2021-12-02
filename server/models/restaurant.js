import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priceLevel: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },

  phone: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  cuisine: [
    {
      type: String,
      required: true,
    },
  ],

  email: {
    type: String,
  },

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

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },

  photos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MultipleFile",
    //required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
