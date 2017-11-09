const User = require('../db/user');
const superagent = require('superagent');

const AUTH_URL = 'https://slack.com/oauth/authorize';
const CLIENT_ID = "232151668245.232194114629";
const CLIENT_SECRET = "6fad7827bff771218d75a1eb2cc4751e";
const SCOPES = 'identity.basic,identity.team,identity.avatar,identity.email';
const ACCESS_URL = "https://slack.com/api/oauth.access";

exports.query = () => {return User.find({})}

exports.create = (data) => {
  const user = new User(data);
  return user.save();
}

exports.find = (id) => {return User.findById(id)}

exports.authenticate = async (code) => {
  const slackUser = (
    await superagent
    .get(ACCESS_URL)
    .query({ client_id:CLIENT_ID, client_secret: CLIENT_SECRET, code: code})
  ).body
  let user = await User.findOne({key:slackUser.user.id})
  if(!user){
    console.log("++++++++++++++++++++++User Not Found++++++++++++++++++++++++")
    user = new User({
      name:  slackUser.user.name,
      email: slackUser.user.email,
      key:   slackUser.user.id
    })
    return user.save()
  }
  return user
}
