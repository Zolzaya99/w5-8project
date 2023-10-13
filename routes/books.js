const express = require('express');
const router = express.Router();
const book = require('../models/book');

const booksController = require('../controllers/books');

// get book by id
router.get('/:id', booksController.getSingle);

// get all books
router.get('/', booksController.getAll);

// create a new book
router.post('/', booksController.createBook);

// update a book by id 
router.put('/:id', booksController.updateBook);

// remove a book by id 
router.delete('/:id', booksController.deleteBook);

module.exports = router;