import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/user-registration")
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
