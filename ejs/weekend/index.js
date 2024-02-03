//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port);

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs");

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    res.render("index",{
        day:day,
    });
});

