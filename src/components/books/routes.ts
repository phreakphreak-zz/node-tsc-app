import { Router } from "express";
import { bookController } from "./controller";
const router: Router = Router();

router.get("/", bookController.getBooks);

router.post("/", bookController.addBook);

router.delete("/:id", bookController.removeBook);

router.get("/:id", bookController.getBook);

export default router;
