var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    id: String,
    books: [String]
});

module.exports = mongoose.model('user', userSchema);
