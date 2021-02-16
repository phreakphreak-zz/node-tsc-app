import { Router } from "express";
import { bookController } from "./controller";
import { bookView } from "./views";
const apiRouter: Router = Router();
const viewRouter: Router = Router();
class BookRoutes {
  constructor(private apiRouter: Router, private viewRouter: Router) {
    this.viewRouter = viewRouter;
    this.apiRouter = apiRouter;
    this.apiRoutes();
    this.viewRoutes();
  }

  public get getApiRouter(): Router {
    return this.apiRouter;
  }
  public get getViewRouter(): Router {
    return this.viewRouter;
  }

  private apiRoutes(): void {
    apiRouter.get("/", bookController.getBooks);
    apiRouter.post("/", bookController.addBook);
    apiRouter.get("/:id", bookController.getBook);
    apiRouter.delete("/:id", bookController.removeBook);
    apiRouter.put("/:id", bookController.updateBook);
  }
  private viewRoutes(): void {
    viewRouter.get("/", bookView.renderBooks);
    viewRouter.get("/add", bookView.renderAddBook);
    viewRouter.get("/edit", bookView.renderEditBook);
  }
}

// apiRouter.get("/add", bookController.renderAddBook);

//* API routes
export const bookRoutes: BookRoutes = new BookRoutes(apiRouter, viewRouter);

// export default apiRouter;
