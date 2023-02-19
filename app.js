const express = require('express'); //used to build our app and server
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

let items = ['Buy food', 'Cook food', 'Eat food'];
let workItems = [];


app.set('view engine', 'ejs'); //use ejs as view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.get('/', function(req, res){

    let day = date();

    res.render('list', {
        listTitle: day,
        newItems: items //new item coming from post req
    }); //looks inside views and looks for list file with ejs ext
})

app.get('/work', function(req, res){
    res.render('list', {
        listTitle: "Work",
        newItems: workItems
    })
})

app.post('/', function(req, res){

    let item = capitalizeFirstLetter(req.body.newItem);

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item); //to use body, need to have body-parser
        res.redirect('/'); //trigger app.get
    }
})

app.post('/work', function(req, res){
    let item = capitalizeFirstLetter(req.body.newItem);
    workItems.push(item);
    res.redirect("/work")
})


app.listen(3000, function () {
    console.log('Server started on port 3000');
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}