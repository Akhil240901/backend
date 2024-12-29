import express from "express";
import "./db/conn.mjs";
import athleteRouter from "./router/request.mjs";

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(athleteRouter);

app.listen(port, () => {
  console.log(`server listening at port no ${port}`);
});
