import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/students-api")
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((e) => {
    console.log("Failed connections");
  });
