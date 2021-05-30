import mongoose from "mongoose";

const travelerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  interests: {
    citiesVisited: [String],
    activities: [String],
    bookmarks: [Number],
    Likes: [Number],
  },
  //timestamps: true
});

const Traveler = mongoose.model("Traveler", travelerSchema);
export default Traveler;
