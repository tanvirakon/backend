import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log("YAPPI");
  res.send("moshi moshi");
});

app.get("/get-secret", async (req, res) => {
  try {
    await axios.get();
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


-- ejs ahouting dile  "type": "module", paste kre dbo package.json e 
-- npm i express body-parser ejs 

