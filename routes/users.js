var express = require('express');
var router = express.Router();
const user = require('../models/user');

router.get('/', function(req, res, next) {
  user.query()
    .then(result => {
      res.send(result)
    })
    .catch(next);
});
router.get('/authenticate', function(req, res, next) {
  res.redirect("app://bookcheckout")
});
router.post('/', function(req, res, next) {
  user.create(req.body)
    .then(result => {
      res.send(result)
    })
    .catch(next);
});

router.get('/:userId', function(req, res, next) {
  user.find(req.params.userId)
    .then(result => {
      res.send(result)
    })
    .catch(next);
});

module.exports = router;
