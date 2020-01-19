var express = require('express');
var router = express.Router();

const request = require('request');


/* GET items. */
router.get('/', function(req, res, next) {
  request("http://192.168.43.44", (err, response, body) => {
    if (err) {
      res.render('error');
      return console.log(err);
    }
    res.render('index', {stock: response.stock, both: response.both, shopping_list: response.shopping_list});
    console.log(body.url);
  console.log(body.explanation);
});
  /* Test data for testing application without Arduino connection */
  /*var json = require("../public/test.json");
  res.render('index', {stock: json.stock, both: json.both, shopping_list: json.shopping_list});*/
});

module.exports = router;
