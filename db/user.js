var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    books: [String],
    key: {type:String, required:true}
});

module.exports = mongoose.model('user', userSchema);
