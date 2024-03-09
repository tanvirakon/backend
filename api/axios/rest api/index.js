import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "835e5a8c-a1c4-40e3-9dad-9a7f454e1f85";

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
// chaile config direct url r poreo dea jay...ager lesson ei prac krc

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  const secret = req.body.secret;
  const score = req.body.score;
  const body = {
    secret: secret,
    score: score,
  };
  try {
    const result = await axios.post(API_URL + "/secrets", body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: error });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  const body = {
    secret: secret,
    score: score,
  };
  try {
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: error });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  const body = {
    secret: secret,
    score: score,
  };
  try {
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: error });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", {
      content: "data deleted success of id " + searchId,
    });
  } catch (error) {
    res.render("index.ejs", { content: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
