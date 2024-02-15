const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/post", (req, res) => {
  const city=req.body.city;
  const apiKey="9924aeadfdec4fb7bb2175224241402";
  const url =
    "https://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+city;

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const icon="https:"+weatherData.current.condition.icon;
      res.write(`<p>local time ${weatherData.location.localtime}</p>`);
      res.write(
        `<p>weather is ${weatherData.current.condition.text}</p>`
      );
      res.write(
        `<h1>temp at ${weatherData.location.name} is ${weatherData.current.temp_c} degree celcious</h1>`
      );
      res.write(`<img src=${icon}>`);
      res.send();
    });
  });
});



app.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});
