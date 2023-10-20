const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const Book = require('../models/books');


const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('books').collection('books').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('books')
    .collection('books')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createBook = async (req, res) => {
  const book = {
    bookName: req.body.bookName,
    author: req.body.author,
    genre: req.body.genre,
    yearPublished: req.body.yearPublished,
    publisher: req.body.publisher,
    pageCount: req.body.pageCount,
    price: {
      hardcover: req.body.price.hardcover,
      paperback: req.body.price.paperback,
      audio: req.body.price.audio
    }
  };
  const response = await mongodb.getDb().db('books').collection('books').insertOne(book);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating book.');
  }
};

const updateBook = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const book = {
    bookName: req.body.bookName,
    author: req.body.author,
    genre: req.body.genre,
    yearPublished: req.body.yearPublished,
    publisher: req.body.publisher,
    pageCount: req.body.pageCount,
    price: {
      hardcover: req.body.price.hardcover,
      paperback: req.body.price.paperback,
      audio: req.body.price.audio
    }
  };
  const response = await mongodb
    .getDb()
    .db('books')
    .collection('books')
    .replaceOne({ _id: userId }, book);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while reading book.');
  }
};

const deleteBook = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('books').collection('books').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while deleting book.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook
};



