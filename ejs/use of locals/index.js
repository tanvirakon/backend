import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  var fname=req.body.fName.length;
  var lname=req.body.lName.length;
  var length=fname+lname;
  // 1 redirect
  // redirect hbe na mne hy
  // 2 render
  res.render("index",{length:length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
