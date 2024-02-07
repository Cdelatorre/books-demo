const router = require("express").Router();
const booksController = require("../controllers/books.controller");
const usersController = require("../controllers/users.controller");

router.get("/", (req, res, next) => res.json({ ok: true }));

/* Books */

router.get("/books", booksController.getBooks);
router.get("/books/latest", booksController.getLatestBooks);
router.post("/books", booksController.createBook);
router.get("/books/:id", booksController.getBookDetail);
router.delete("/books/:id", booksController.deleteBook);
router.put("/books/:id", booksController.editBook);

/* Users */

router.get("/users", usersController.getUsers);
router.post("/users", usersController.createUser);
router.get("/users/:id", usersController.userDetail);

module.exports = router;
