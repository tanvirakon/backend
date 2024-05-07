import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
// import encrypt from "mongoose-encryption";
// import md5 from "md5";
import bcrypt from "bcrypt";
const saltRounds = 10;
//need to create gitignore to hide .env file

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public"));
mongoose
  .connect("mongodb://127.0.0.1:27017/userDB")
  .then(function () {
    console.log("connected with mongoose");
  })
  .catch(function (err) {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });
const user = new mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app
  .route("/login")
  .get(async (req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    const FoundUser = await user.findOne({ email: req.body.email });
    if (FoundUser == null) {
      res.send("Invalid Email");
    } else {
      bcrypt.compare(
        req.body.password,
        FoundUser.password,
        function (err, result) {
          if (result == true) res.render("secrets");
          else res.send("Wrong pass");
        }
      );
    }
  });

app
  .route("/register")
  .get(async (req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      const newUser = new user({
        email: req.body.email,
        password: hash,
      });
      newUser
        .save()
        .then(function () {
          console.log("new user saved");
          res.render("secrets");
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
