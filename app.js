const express = require('express'); //used to build our app and server
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs'); //use ejs as view engine


app.get('/', function (req, res) {
    // res.send('Hello'); //user accesses home route and as response receives back 'Hello'

    let today = new Date();
    let currentDay = today.getDay()
    let day = '';

    switch (currentDay) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            console.log(`Error, current day is equal to ${currentDay}`);
            break;
    };
    // if (currentDay === 6 || currentDay === 0) {
    //     day = 'Weekend';
    //     // res.sendFile(__dirname + '/index.html')
    // } else {
    //     day = 'Weekday';
    // }
    res.render('list', { kindOfDay: day }); //looks inside views and looks for list file with ejs ext
})


app.listen(3000, function () {
    console.log('Server started on port 3000');
})