import { Router } from "express";
import booksRoutes from '../components/books/routes';

const router: Router = Router();

router.use('/books',booksRoutes);

router.get("/", (req, res, next) => {
  res.render("index");
});

export default router;
