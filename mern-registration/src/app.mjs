import express from "express";
import "./db/conn.mjs";
import User from "./models/regiSchema.mjs";
import hbs from "hbs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { console } from "inspector";

const app = express();
const port = process.env.PORT || 3000;

//get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//absolute path
console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// //middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));

//set template engine for static or dynamic data
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", async (req, res) => {
  res.render("index.hbs");
});

app.get("/register", async (req, res) => {
  res.render("register.hbs");
});

//post request will handle data from form and store in database
app.post("/register", async (req, res) => {
  try {
    const pass = req.body.password;
    const cpass = req.body.cpassword;
    if (pass === cpass) {
      const userData = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      const data = await userData.save();
      res.status(201).render("index.hbs");
    } else {
      res.status(500).send("password is not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log("serveris listening at ${port}");
});
