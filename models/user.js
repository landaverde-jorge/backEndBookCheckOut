const User = require('../db/user');
const superagent = require('superagent');
require(‘dotenv’).load();


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
