var express = require('express');
var router = express.Router();
const book = require('../models/book');

router.get('/books', function(req, res, next) {
  book.query()
    .then(result => {
      res.send(result)
    })
    .catch(next);
});

router.post('/', function(req, res, next) {
  book.create(req.body)
    .then(result => {
      res.send(result)
    })
    .catch(next);
});

router.get('/:bookId', function(req, res, next) {
  book.find(req.params.bookId)
    .then(result => {
      res.send(result)
    })
    .catch(next);
});

module.exports = router;
