var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://jorge_landaverde:football101@ds129344.mlab.com:29344/bookcheckout',  ['books']);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Library', function(req, res, next){
  var Schema = mongoose.Schema;

});

module.exports = router;
