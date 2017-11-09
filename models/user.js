const User = require('../db/user');
const superagent = require('superagent');

exports.query = () => {return User.find({})}
exports.create = (data) => {
  const user = new User(data);
  return user.save();
}
exports.find = (id) => {return User.findById(id)}
exports.findBySlackId = (id) => {return User.find({key:id})}
exports.authenticate = async (code) => {
  const slackUser = (
    await superagent
    .get("https://slack.com/api/oauth.access")
    .query({ client_id:"232151668245.232194114629", client_secret: "6fad7827bff771218d75a1eb2cc4751e", code: code})
  ).body

  console.log(slackUser)
}
