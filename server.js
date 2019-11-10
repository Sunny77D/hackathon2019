const express    = require('express')
const bodyParser = require('body-parser');
const request = require('request')
const url = require('url');
const querystring = require('querystring');

const app = express()


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// Getting Parameters from Qr Code Scan
app.get('/', function (req, res) {
  // Access the provided 'page' and 'limt' query parameters
  let bD = req.query.bD;
  let rM = req.query.rM;
  res.render('index', {bD: bD, rM: rM});
})


// Information User types
// app.post('/', function (req, res) {
//   let city = req.body.city;
//   let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}'
//   request(url, function(err, response, body) {
//     if(err) {
//       res.render('index', {weather:null, error:'Error in API Call, please try again'});
//     } else {
//       let weather = JSON.parse(body)
//       if (weather.main == undefined) {
//         res.render('index', {weather: null, error: 'Error, can\'t find weather main. Please try again'});
//       } else {
//         let weatherText = ' It\'s ${weather.main.temp} degrees in ${weather.name}!';
//         res.render('index', {weather: weatherText, error: null});
//       }
//     }
//   });
// })



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
