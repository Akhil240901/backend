import express from "express";
import "./db/conn.mjs";
import Student from "./models/student.mjs";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       return res.status(201).send(user);
//     })
//     .catch((e) => {
//       return res.status(200).send(e);
//     });
//   res.send(user);
// });

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    console.log(student);
    return res.status(201).send(student);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(400).send({ error: error.message });
  }
});
app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
