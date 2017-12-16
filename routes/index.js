var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require(‘dotenv’).load();

mongoose.connect( mongoPath, {
  user: mongoUser,
  pass: mongoPass
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
