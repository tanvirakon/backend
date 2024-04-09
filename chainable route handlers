import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const list = [1, 2, 3];

app
  .route("/")
  .get((req, res) => {
    res.send(list);
  })
  .post((req, res) => {
    //use postman as we dont have frontend
    const newValue = parseInt(req.body.value);
    list.push(newValue);
    res.redirect("/");
  })
  .delete((req, res) => {
    list.length = 0;
    res.redirect("/");
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
