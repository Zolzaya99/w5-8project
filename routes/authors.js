const express = require('express');
const router = express.Router();
const book = require('../models/authors');

const authorsController = require('../controllers/authors');
const validation = require('../middleware/validate')

// get book by id
router.get('/:id', authorsController.getSingle);

// get all books
router.get('/', authorsController.getAll);

// create a new book
router.post('/', validation.saveAuthor, authorsController.createAuthor);

// update a book by id 
router.put('/:id', validation.saveAuthor, authorsController.updateAuthor);

// remove a book by id 
router.delete('/:id', authorsController.deleteAuthor);


module.exports = router;