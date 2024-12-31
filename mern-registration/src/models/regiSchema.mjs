import mongoose from "mongoose";

//create schema for registration form
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
  cpassword: {
    type: Number,
    required: true,
    unique: true,
  },
});

//create collection
const User = new mongoose.model("User", userSchema);

export default User;
