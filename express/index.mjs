import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
  res.send("It is about us page");
  
});

app.get("/contact", (req, res) => {
  res.send("it is contact us page");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
