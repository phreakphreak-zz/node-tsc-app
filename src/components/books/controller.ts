import { Response, Request, NextFunction } from "express";
import { Error, isValidObjectId } from "mongoose";
import { Book } from "./Book";
import { BookModel } from "./model";

class BookController {
  public async getBooks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const books: Book[] = await BookModel.find({}).lean();
      res.status(200).json(books);
      // res.render("books/index", { title: "Books", books });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  public async addBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { title, author, isbn } = req.body;
      const newBook: Book = new BookModel({
        title,
        author,
        isbn,
      });
      await newBook.save();
      res.redirect("/books/add");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  public async getBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        const book: Book | null = await BookModel.findById(id);
        res.status(200).json(book);
      } else {
        throw new Error("ObjectId is not valid");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  public async removeBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      if (isValidObjectId(id)) {
        await BookModel.findByIdAndDelete(id);
        res.status(200).json({ status: "book removed" });
      } else {
        throw new Error("ObjectId is not valid");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  public async updateBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        await BookModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({ status: "book updated" });
      } else {
        throw new Error("ObjectId is not valid");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const bookController: BookController = new BookController();
