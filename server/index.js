const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BookModel = require("./models/Books");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");
app.get("/", (req, res) => {
  BookModel.find({})
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});
app.get("/getBook/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findById({ _id: id })
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});
app.put("/updateBook/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndUpdate(
    { _id: id },
    {
      book: req.body.book,
      description: req.body.description,
      price: req.body.price,
    }
  )
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.post("/createBook", (req, res) => {
  BookModel.create(req.body)
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is running");
});
