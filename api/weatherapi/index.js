const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=9924aeadfdec4fb7bb2175224241402&q=Bangladesh";

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.current.temp_c);
    });
  });

  res.send("hello");
});

app.listen(port,function(){
  console.log(`Server running on port: ${port}`);
})
