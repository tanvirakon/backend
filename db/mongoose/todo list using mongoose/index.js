const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use(express.static("./public"));
mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(function () {
    console.log("connected with mongoose");
  })
  .catch(function (err) {
    console.log(err);
  });

//no need of an array anymore. will be stored in DB
// let todoList = [];
// let workList = [];

const newSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("todo", newSchema);

app.get("/", async function (req, res) {
  const alltodo = await todoModel.find();
  res.render("index", {
    title: "day",
    list: alltodo,
  });
});



app.post("/", async function (req, res) {
  let newItem = req.body.new_input;
  if (req.body.list == "work") {
    workList.push(newItem);
    res.redirect("/work");
  } else {
    const newTodo = await new todoModel({
      title: newItem,
    });
    newTodo.save();
    res.redirect("/");
  }
  // res.render("index",{list:todoList,title:day});
});

// app.post('/work', function (req, res) {
//     workList.push(req.body.new_input);
//     res.redirect('/work');
// })
// work r jnno new post method r drkr nai . 1ta diyei hye jcce

app.post("/dlt", async function (req, res) {
  if (req.body.list == "work") {
    workList = [];
    res.redirect("/work");
  } else {
    await todoModel
      .deleteMany()
      .then(function () {
        console.log("DLTED");
      })
      .catch(function (err) {
        console.log(err);
      });
    res.redirect("/");
  }
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(3000);
