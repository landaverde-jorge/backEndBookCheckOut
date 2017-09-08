var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Library', function(req, res, next){
  var Schema = mongoose.Schema;
  
});

module.exports = router;
