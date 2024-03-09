// https://secrets-api.appbrewery.com/

import axios from "axios";
import express from "express";

const app = express();
const port = 5000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "tanivrakon11";
const yourPassword = "akon1";
const yourAPIKey = "75db9cbc-be80-4a5c-9d28-5b3afedd7106";
const yourBearerToken = "835e5a8c-a1c4-40e3-9dad-9a7f454e1f85";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const URL = API_URL + "/all?page=1";
    const response = await axios.get(URL, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    //both methods are correct

    // const response = await axios.get(API_URL + "/filter", {
    //   params: {
    //     score: 6,
    //     apiKey: yourAPIKey,
    //   },
    // });

    const response = await axios.get(
      API_URL + "/filter?score=6&apiKey=" + yourAPIKey
    );

    res.render("index.ejs", { content: JSON.stringify(response.data) });
    // console.log(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// const config = {
// headers: { Authorization: `Bearer ${yourBearerToken}` },
// };

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });

    // both methods are ok

    // const result = await axios.get(API_URL + "/secrets/3", config);
    
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
