const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const Book = require('../models/Book.model');

module.exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(StatusCodes.OK).json(books)
    })
    .catch(next) 
}

module.exports.getLatestBooks = (req, res, next) => {
  Book.find().limit(3)
    .then((books) => {
      res.status(StatusCodes.OK).json(books)
    })
    .catch(next) 
}

module.exports.createBook = (req, res, next) => {
  Book.create(req.body)
    .then(createdBook => {
      res.status(StatusCodes.CREATED).json(createdBook)
    })
    .catch(next)
}

module.exports.getBookDetail = (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        next(createError(StatusCodes.NOT_FOUND, 'Book not found'))
      } else {
        res.status(StatusCodes.OK).json(book)
      }
    })
    .catch(next)
}

module.exports.deleteBook = (req, res, next) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (!book) {
        next(createError(StatusCodes.NOT_FOUND, 'Book not found'))
      } else {
        res.status(StatusCodes.NO_CONTENT).json();
      }
    })
    .catch(next)
}

module.exports.editBook = (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(editedBook => {
      res.json(editedBook);
    })
    .catch(next)
}