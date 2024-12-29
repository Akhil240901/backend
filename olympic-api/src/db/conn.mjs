import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/olympic-api")
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
