import { Response, Request, NextFunction, response } from "express";
import { Error, isValidObjectId } from "mongoose";
import { Book } from "./Book";
import { BookModel } from "./model";

class BookController {
  public async getBooks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const books: Book[] = await BookModel.find();
    res.json(books);
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
      res.status(200).json({ status: "book added" });
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
        res.status(202).json({ status: "book removed" });
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
      if(isValidObjectId(id)){
        const {} = req.body;

      } else {
        throw new Error("ObjectId is not valid");
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const bookController: BookController = new BookController();
