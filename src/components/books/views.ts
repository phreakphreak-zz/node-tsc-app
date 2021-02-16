import { Request, Response, NextFunction } from "express";
import { config } from "../../config";
import fetch from "node-fetch";
const url_books: string = `${config.base}/api/books`;

class BookView {
  public async renderBooks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await fetch(`${url_books}`);
      const books = await response.json();
      res.render("books/index", { books });
    } catch (error) {
      if (res.statusCode >= 400) {
        res.render("partials/error404", { error: error.message });
      } else {
        res.render("partials/error500", { error: error.message });
      }
    }
  }
  public async renderAddBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.render("books/add");
    } catch (error) {
      if (res.statusCode >= 400) {
        res.render("partials/error404", { error: error.message });
      } else {
        res.render("partials/error500", { error: error.message });
      }
    }
  }
  public async renderEditBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.render("books/edit");
    } catch (error) {
      if (res.statusCode >= 400) {
        res.render("partials/error404", { error: error.message });
      } else {
        res.render("partials/error500", { error: error.message });
      }
    }
  }
}
export const bookView: BookView = new BookView();
