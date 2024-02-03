const router = require('express').Router();
const booksController = require('../controllers/books.controller');

router.get('/', (req, res, next) => res.json({ ok: true }));

/* Books */

router.get('/books', booksController.getBooks);
router.get('/books/latest', booksController.getLatestBooks);
router.post('/books', booksController.createBook);
router.get('/books/:id', booksController.getBookDetail);
router.delete('/books/:id', booksController.deleteBook);
router.put('/books/:id', booksController.editBook);

module.exports = router;