const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Required field"],
    },
    abstract: {
      type: String,
      required: [true, "Required field"],
    },
    isbn: {
      type: String,
      required: [true, "Required field"],
    },
    cover: {
      type: String,
      required: [true, "Required field"],
    },
    genres: {
      type: [String],
      default: [],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    virtuals: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
