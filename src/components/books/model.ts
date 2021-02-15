import { Schema, model } from "mongoose";

import { Book } from "./Book";

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
});

export const BookModel = model<Book>("Book", BookSchema);
