import express from "express";

const app = express();

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
