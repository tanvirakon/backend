import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public"));
mongoose
  .connect("mongodb://127.0.0.1:27017/fruitDB")
  .then(function () {
    console.log("connected with mongoose");
  })
  .catch(function (err) {
    console.log(err);
  });

const FruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
    required: [true, "Why no name?! Dont you like fruit?!"],
    //chaile emne 1ta msg dea jay...jeta validation fail hle dekhabe
  },
  rating: {
    type: Number,
    max: 10,
    min: 1,
  },
  review: String,
});

// Fruits namer collection create hye jbe, model r mddhe name ta singular dte hbe..mongodb plural kre ney..jdi person dei..people hye jbe
const Fruit = mongoose.model("Fruit", FruitSchema);

// fruit namer 1ta entry / document
const fruit = new Fruit({
  name: "pineabpple",
  rating: 10,
  review: "sour fruit",
});
// fruit.save();
// comment na krle bar bar chlebe & i will get whole bunch of apple

//same fruitdb te person namer arekta collection krte chai

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favFruit: FruitSchema,
});
const Person = mongoose.model("person", personSchema);

const person = new Person({
  name: "Tanvir Akon",
  age: 23,
});

// person.save()

//insertmany() use krbo ekhn fruits e
// schema , model 2tai ready ase , just entry gula likhbo

const kiwi = new Fruit({
  name: "kiwi",
  rating: 2,
  review: "never tested",
});
const orange = new Fruit({
  name: "orange",
  rating: 4,
  review: "so so",
});
const lemon = new Fruit({
  name: "lemon",
  rating: 6,
  review: "sour but useful",
});

// Fruit.insertMany([kiwi,orange,lemon]);

// Fruit.updateOne(
//   { _id: "661026943cca9fefc1168d59" },
//   { $set: { name: "not apple" } }
// )
//   .then(function () {
//     console.log("updated");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//delete
Fruit.deleteOne({ id:"661026943cca9fefc1168d59"})
// delete doesnt work

const fruitForPeople = new Fruit({
  name: "pineaple",
  rating: 7,
  review: "not bad",
});

// fruitForPeople.save();

const newPerson = new Person({
  name: "amy",
  age: 19,
  favFruit: fruitForPeople,
});

// newPerson.save();

// Person.find()
//   .then(function (person) {
//     person.forEach((e) => console.log(e));
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

Person.updateOne(
  { _id: "661008bc359f288b806b90d7" },
  { $set: { favFruit: fruitForPeople } }
)
  .then(function () {
    console.log("UPDATW DONE");
  })
  .catch(function (err) {
    console.log(err);
  });

Fruit.find()
  .then(function (fruit) {
    fruit.forEach((e) => console.log(e.name));
    // console.log(fruit);
  })
  .catch(function (err) {
    console.log(err);
  });

//findone
// .post(async (req, res) => {
//     const FoundUser = await user.find({ email: req.body.email });
//     console.log(FoundUser);
//   });
// if(FoundeUser) do domethin
//   else do somethin

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
