import express from "express";
import exphbs from "express-handlebars";
import middlewares from "./middlewares/index";
import routes from "./routes/index";
import {config} from './config';
import path from "path";

const app = express();

//* Settings
app.set("port", config.port);
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

//* Middlewares
app.use(middlewares);

//* Routes
app.use(routes);

//* Static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
//module.exports = app;
