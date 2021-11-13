import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  priceRange: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
  },

  openingTime: {
    type: String,
    required: true,
  },

  closingTime: {
    type: String,
    required: true,
  },

  daysOpen: {
    type: String,
    required: true,
  },
  facilities: {
    type: Array,
    required: true,
  },
  //timestamps: true
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
