import express from "express";
const router = express.Router();
import { book } from "../models/bookModel.js"; //model

//post a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const newBook = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    // const Book = new book(newBook);
    // Book.save();
    // or
    const Book = await book.create(newBook);
    console.log(Book);
    res.status(200).send(Book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error: " + err.message);
  }
});

//get all books
router.get("/", async (req, res) => {
  try {
    const allBooks = await book.find({});
    console.log(allBooks);
    res.status(200).send({
      length: allBooks.length,
      data: allBooks,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error: " + err.message);
  }
});

//get book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookById = await book.findById(id);
    console.log(bookById);
    res.status(200).send(bookById);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error: " + err.message);
  }
});

//update a book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await book.findByIdAndUpdate(id, { $set: req.body });
    if (!updatedBook) res.status(400).send({ message: "book not found" });
    else res.status(200).send(updatedBook);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error: " + err.message);
  }
});

//delete a book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await book.findByIdAndDelete(id);
    if (!deleteBook) res.status(400).send({ message: "book not found" });
    else res.status(200).send({ message: "book dlted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error: " + err.message);
  }
});

export default router;
