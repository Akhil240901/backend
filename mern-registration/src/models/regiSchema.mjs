import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

//convert normal password to hash password before saving to db
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`current password ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`${this.hashPassword}`);
    this.cpassword = undefined;
  }

  next();
});

//create collection
const User = new mongoose.model("User", userSchema);

export default User;
