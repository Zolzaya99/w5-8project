const express = require('express');
const router = express.Router();
const book = require('../models/books');

const booksController = require('../controllers/books');
const validation = require('../middleware/validate')
const authorize = require('../middleware/authorize.js');

// get book by id
router.get('/:id', booksController.getSingle);

// get all books
router.get('/', booksController.getAll);

// create a new book
router.post('/', authorize.checkLogin, validation.saveBook, booksController.createBook);

// update a book by id 
router.put('/:id', authorize.checkLogin, validation.saveBook, booksController.updateBook);

// remove a book by id 
router.delete('/:id', authorize.checkLogin, booksController.deleteBook);



module.exports = router;