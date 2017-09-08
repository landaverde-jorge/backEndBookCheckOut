const Book = require('../db/book');

exports.query = () => {return Book.find({})}
exports.create = (data) => {
  const book = new Book(data);
  return book.save();
}
exports.find = (id) => {return Book.findById(id)}
