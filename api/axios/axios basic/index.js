import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    // console.log("result: ",result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  // console.log(req.body);
  let url = "https://bored-api.appbrewery.com/";
  if (req.body.type == "" && req.body.participants == "") url += "random";
  else if (req.body.type != "" && req.body.participants == "")
    url += "filter?type=" + req.body.type;
  else if (req.body.type == "" && req.body.participants != "")
    url += "filter?participants=" + req.body.participants;
  else
    url +=
      "filter?type=" + req.body.type + "&participants=" + req.body.participants;
  // console.log(url);
  try {
    const response = await axios.get(url);
    const result = response.data[Math.floor(Math.random()*response.data.length)];
    // console.log("result: ", (result));
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "cant find anything match",
    });
  }


});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
