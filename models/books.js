const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
bookName: {
    type: String,
    required: true,
},
author: {
    type: String,
    required: true,
},
genre: {
    type: String,
    required: true,
},
yearPublished: {
    type: Number,
    required: true,
},
publisher: {
    type: String,
    required: true,
},
pageCount: {
    type: Number,
    required: true,
},
price: {
    hardcover: {
    type: String,
    required: true,
    },
    paperback: {
    type: String,
    required: true,
    },
    audio: {
    type: String,
    required: true,
    },
},
});

module.exports = mongoose.model('Book', bookSchema);