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

//get the data using get method
router.get("/athlete", async (req, res) => {
  try {
    const atheleteData = await Athlete.find();
    res.send(atheleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update the ranking using patch request
router.patch("/athlete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await Athlete.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateData);
    console.log(updateData);
  } catch (error) {
    res.send(error);
  }
});
//export router
export default router;
