var express = require('express');
var router = express.Router();

const request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  /*request('https://api.nas.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, response, body) => {
    if (err) {
      res.render('error');
      return console.log(err);
    }
    res.render('index', {stock: response.stock, both: response.both, shopping_list: response.shopping_list});
    console.log(body.url);
  console.log(body.explanation);
});*/
  var json = require("/Users/annika/Documents/LNU/4ME303-TangibleUserInterfaces/Assignments/03 Final project/WebApp/public/test.json");
  res.render('index', {stock: json.stock, both: json.both, shopping_list: json.shopping_list});
});

module.exports = router;
