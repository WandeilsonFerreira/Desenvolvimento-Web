const mongoose = require('mongoose')
const Person = mongoose.model('Person', {
    name: String,
    adress: String,
    phone: String,
})
module.exports = Person