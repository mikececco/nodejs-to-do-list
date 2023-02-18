const express = require('express'); //used to build our app and server
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

var items = ['Buy food', 'Cook food', 'Eat food'];


app.set('view engine', 'ejs'); //use ejs as view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.get('/', function(req, res){

    res.render('list', {
        kindOfDay: day,
        newItems: items //new item coming from post req
    }); //looks inside views and looks for list file with ejs ext
})

app.post('/', function(req, res){
    var item = capitalizeFirstLetter(req.body.newItem);
    items.push(item); //to use body, need to have body-parser
    // console.log(item);
    res.redirect('/'); //trigger app.get
})


app.listen(3000, function () {
    console.log('Server started on port 3000');
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}