const mongoose = require('mongoose')
const Book = mongoose.model('Book', {
    name: String,
    author: String,
    ISBN: String,
})
module.exports = Book

 