var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    quantity: String,
    available: Number,
    active: Boolean
});

module.exports = mongoose.model('book', bookSchema);

var statusSchema = mongoose.Schema({ //check_outs
    location: String,
    date_checked_out: String,
});
