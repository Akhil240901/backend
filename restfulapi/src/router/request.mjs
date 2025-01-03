import express from "express";
const router = new express.Router();
import Student from "../models/student.mjs";

//async await
router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save(); //returns promises
    console.log(student);
    return res.status(201).send(student);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(400).send({ error: error.message });
  }
});

//read the registered students information  using get request
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
    console.log(studentsData);
  } catch (error) {
    res.send(error);
  }
});

//Read individual data using get request
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (error) {
    res.send(error);
  }
});

//Update data using PATCH request
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studData = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(studData);
    res.send(studData);
  } catch (error) {
    res.status(404).send(error);
  }
});

//delete request to delete document
router.delete("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findByIdAndDelete(req.params.id);
    if (!studentData) {
      return res.status(404).send();
    }
    res.send(studentData);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
