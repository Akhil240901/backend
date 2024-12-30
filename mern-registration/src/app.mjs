import express from "express";
import "./db/conn.mjs";
import User from "./models/regiSchema.mjs";

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
  res.send("welcome to home");
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
