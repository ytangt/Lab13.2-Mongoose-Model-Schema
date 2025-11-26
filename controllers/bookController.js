const Book = require("../models/Book")

//Create
const createBook = async (req, res) => { 
    try {
        const book = await Book.create(req.body)
        res.json(book)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

//Read all
const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

//Read one
const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({message: "Book not found"})
        res.json(book)
    } catch (error) {
        console.error(error);
        
    }
}

//Update
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedBook) return res.status(404).json({ message: "Update Book" });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {createBook, getBooks, getBook, updateBook, deleteBook}