const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
