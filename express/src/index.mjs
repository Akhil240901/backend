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

//absolute or full path for static content
const staticPath=path.join(__dirname,"../public")
//path for changing views directory to templates
const templatesPath=path.join(__dirname,"../templates/views")
//paths for partials 
const partialPath=path.join(__dirname,"../templates/partials")

//to set view engine
app.set("view engine","hbs");
//Changing  view engine folder to templates 
app.set("views",templatesPath);
//register partials with the help of partials
hbs.registerPartials(partialPath);

app.get("",(req,res)=>{
  //.render will serve page and send data just like props in react in object
  res.render("index.hbs",{
    sourceName:"Akhil bisen",
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
