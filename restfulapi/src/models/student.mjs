import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

//We will create  a new collection (always capital letter bcoz its a class)
const Student = new mongoose.model("Student", studentSchema);

export default Student;
