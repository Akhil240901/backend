import mongoose from "mongoose";

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
