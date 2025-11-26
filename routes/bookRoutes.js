const express = require('express')
const router = express.Router()
const {createBook, 
    getBooks, 
    getBook, 
    updateBook, 
    deleteBook } = require('../controllers/bookController')

router.post("/", createBook)

router.get("/", getBooks)

router.get("/:id", getBook)

// UpDate
router.put("/:id", updateBook);

// DELETE
router.delete("/:id", deleteBook);
module.exports = router