var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    books: [String]
});

module.exports = mongoose.model('user', userSchema);
