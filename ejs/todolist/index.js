const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.set("view engine", "ejs");
app.use(express.static('./public'));

let todoList = [];
let workList = [];

app.get('/', function(req, res) {
    let day = date.getDate();
    res.render('index', {
        title: day,
        list: todoList
    });
})
app.get('/work', function(req, res) {
    res.render('index', {
        title: "work",
        list: workList
    });
})

app.post('/', function(req, res) {
    let newItem = req.body.new_input;
    if (req.body.list == "work") {
        workList.push(req.body.new_input);
        res.redirect('/work');
    } else {
        todoList.push(newItem);
        res.redirect('/');
    }
    // res.render("index",{list:todoList,title:day});
})


// app.post('/work', function (req, res) {
//     workList.push(req.body.new_input);
//     res.redirect('/work');
// })
// work r jnno new post method r drkr nai . 1ta diyei hye jcce


app.post('/dlt', function(req, res) {
    if (req.body.list == "work") {
        workList = [];
        res.redirect('/work');
    } else {
        todoList = [];
        // res.render("index",{list:todoList,title:day});
        res.redirect('/');
    }
})
app.get('/about', function(req, res) {
    res.render('about');
})
app.listen(3000)