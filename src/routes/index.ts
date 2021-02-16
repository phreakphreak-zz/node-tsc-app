import { Router } from "express";
import { bookRoutes } from "../components/books/routes";

const router: Router = Router();

//* Views
router.use("/books", bookRoutes.getViewRouter);
router.get("/", (req, res, next) => {
  res.render("index");
});

//* Api
router.use("/api/books", bookRoutes.getApiRouter);


export default router;
