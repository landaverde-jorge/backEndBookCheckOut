const User = require('../db/user');

exports.query = () => {return User.find({})}
exports.create = (data) => {
  const user = new User(data);
  return user.save();
}
exports.find = (id) => {return User.findById(id)}
exports.findBySlackId = (id) => {return User.find({key:id})}
exports.authenticate = (id) => {return User.findById(id)}
