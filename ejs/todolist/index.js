const express = require('express')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine","ejs");
app.use(express.static('./public'));


app.get('/', function (req, res) {
    res.render('index');
})
let todoList=[];
app.post('/submit', function (req, res) {
    todoList.push(req.body.new_input);
    res.render("index",{todoList:todoList});
})
app.post('/dlt', function (req, res) {
    todoList=[];
    res.render("index",{todoList:todoList});
})
app.listen(3000)