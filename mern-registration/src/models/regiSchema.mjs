import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Generating tokens
userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    res.send("the error is " + error);
    console.log("our error is " + error);
  }
};

//convert normal password to hash password before saving to db
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`current password ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`${this.hashPassword}`);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }

  next();
});

//create collection
const User = new mongoose.model("User", userSchema);

export default User;
