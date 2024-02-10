const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.listen(3000);

const all_post = [];

app.get("/", function (req, res) {
  res.render("index", { all_post: all_post });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/compose", function (req, res) {
  res.render("compose");
});
app.get("/posts/:name", function (req, res) {
  let post_title = req.params.name;
  let post_body;
  let flag = 0;
  all_post.forEach(function (post) {
    if (_.lowerCase(post.title) === _.lowerCase(post_title)) {
      flag = 1;
      post_title = post.title;
      post_body = post.body;
      console.log(post_body);
      res.render("posts", { post_title: post_title, post_body: post_body });
    }
  });
  if (!flag) {
    res.send("Post not found!");
  }
});
app.post("/compose", function (req, res) {
  const blog_title = req.body.blog_title;
  const blog_body = req.body.blog_body;
  const post = {
    title: blog_title,
    body: blog_body,
  };
  all_post.push(post);
  res.redirect("/");
});
