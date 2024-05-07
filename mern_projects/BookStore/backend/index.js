import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { mongodbURL, port } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("paic");
});

app.use("/book", booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("connected with mongoose");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
