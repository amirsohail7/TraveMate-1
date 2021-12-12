import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
