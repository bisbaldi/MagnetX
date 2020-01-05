var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var json = require("/Users/annika/Documents/LNU/4ME303-TangibleUserInterfaces/Assignments/03 Final project/WebApp/public/test.json");
  res.render('index', {stock: json.stock, both: json.both, shopping_list: json.shopping_list});
});

module.exports = router;
