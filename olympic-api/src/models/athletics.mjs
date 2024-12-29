import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  event: {
    type: String,
    default: "100m",
  },
  country: {
    type: String,
    required: true,
  },
});

//create collection name
const Athlete = new mongoose.model("Athlete", athleteSchema);

//export
export default Athlete;
