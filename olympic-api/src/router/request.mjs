import express from "express";
import Athlete from "../models/athletics.mjs";

//create new instance of express router
const router = new express.Router();

//create or post data to database
router.post("/athlete", async (req, res) => {
  try {
    const newData = new Athlete(req.body);
    await newData.save();
    res.status(201).send(newData);
  } catch (error) {
    res.status(500).send(error);
  }
});

//export router
export default router;
