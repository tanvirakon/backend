const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { log } = require("console");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/subscribe", (req, res) => {
  
  const fname = req.body.first;
  const lname = req.body.last;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME:fname,
          LNAME:lname,
        }
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us18.api.mailchimp.com/3.0/lists/83be7917f9";

  const options = {
    method: "POST",
    auth: "tanvir:e3fe37cd442f17cbf53fe9db6fd85e6e-us18",
  };

  const request=https.request(url, options, (response) => {
    // response.on("data", (data) => {
    //   console.log(JSON.parse(data));
    // });
    if(response.statusCode==200) res.sendFile(__dirname+'/success.html');
    else res.sendFile(__dirname+'/failure.html');

  });
  
  request.write(jsonData);
  request.end();
});

//key
// e3fe37cd442f17cbf53fe9db6fd85e6e-us18

// audience id
// 83be7917f9

// https://<dc>.api.mailchimp.com/3.0/
