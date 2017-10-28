var express = require('express');
var router = express.Router();
const user = require('../models/user');
const superagent = require('superagent');

const AUTH_URL = 'https://slack.com/oauth/authorize';
const CLIENT_ID = "232151668245.232194114629";
const CLIENT_SECRET = "6fad7827bff771218d75a1eb2cc4751e";
const SCOPES = 'identity.basic,identity.team,identity.avatar,identity.email';
const ACCESS_URL = "https://slack.com/api/oauth.access";

router.get('/', function(req, res, next) {
  user.query()
    .then(result => {
      res.send(result)
    })
    .catch(next);
});
router.get('/authenticate', function(req, res, next) {
  const code = req.query.code

  superagent.get(ACCESS_URL)
  .query({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code: code})
  .end((err, response) => {
    if (err) { return console.log(err); }
    console.log(response, "================================",response.body.user.name)
    // user.create(response.identity.email)
    //   .then(result => {
    //     res.send(result)
    //   })
    //   .catch(next);
    const token = response.body

    res.redirect("app://bookcheckout?token="+token)
    //res.redirect("app://bookcheckout?token=helloworld")
  });

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
