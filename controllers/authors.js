const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const Book = require('../models/authors');


const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('authors').collection('authors').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid id to find an author.');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('authors')
    .collection('authors')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createAuthor = async (req, res) => {
  try {
    const book = {
      authorName: req.body.authorName,
      birthday: req.body.birthday,
      hometown: req.body.hometown,
      booksWritten: req.body.booksWritten,
      networth: req.body.networth,
      children: req.body.children
    };
    const response = await mongodb.getDb().db('authors').collection('authors').insertOne(book);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'An error occurred while creating author.');
    }
  } catch (err) {
      res.status(500).json(err);
  }
};

const updateAuthor = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid id to update author.');
  }
  try {
    const userId = new ObjectId(req.params.id);
    const book = {
        authorName: req.body.authorName,
        birthday: req.body.birthday,
        hometown: req.body.hometown,
        booksWritten: req.body.booksWritten,
        networth: req.body.networth,
        children: req.body.children
    };
    const response = await mongodb
      .getDb()
      .db('authors')
      .collection('authors')
      .replaceOne({ _id: userId }, book);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'An error occurred while updating author.');
    } 
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteAuthor = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid id to delete an author.');
  }
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('authors').collection('authors').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'An error occurred while deleting author.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  createAuthor,
  updateAuthor,
  deleteAuthor
};



