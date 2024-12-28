import express from "express";
import "./db/conn.mjs";
import Student from "./models/student.mjs";
import studentRouter from "./router/request.mjs";

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(studentRouter);
//register student information using post request

//using promises but showing stack tree error
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

app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
