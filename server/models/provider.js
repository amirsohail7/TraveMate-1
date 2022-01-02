import mongoose from "mongoose";

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

  Restaurant: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
  Hotel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
  Tours: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
  ],
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SingleFile",
    //required: true,
  },

  //timestamps: true
});

const Provider = mongoose.model("Provider", providerSchema);
export default Provider;
