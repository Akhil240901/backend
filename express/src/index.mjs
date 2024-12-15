import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import hbs from "hbs";
const app = express();

// Get the __filename equivalent
const __filename = fileURLToPath(import.meta.url);

// Get the __dirname equivalent
const __dirname = dirname(__filename);

//absolute or full path
const staticPath=path.join(__dirname,"../public")

//to set view engine
app.set("view engine","hbs");

app.get("",(req,res)=>{
  //.render will serve page and send data just like props in react in object
  res.render("index.hbs",{
    sourceName:"Akhil",
  })
})
//using middleware, below line will show html page
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("<h1> Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
  res.send("It is about us page");
  
});

app.get("/contact", (req, res) => {
  res.send("it is contact us page");
});

app.get("/temp", (req, res) => {
  res.send([{
    id:1,
    name:"Akhil",
  },
  {
    id:2,
    name:"Nikhil",
  },
  {
    id:1,
    name:"sahil",
  },
  {
    id:1,
    name:"Amol",
  },
]);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
