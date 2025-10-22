import express, { Express,Router,Request,Response } from "express";
import path from "path";
import dotenv from "dotenv";
import Topic from "./models/topics.model";
import * as database from "./config/database.config";
import { RouterClient } from "./routes/client/index.route";
database.connect();
dotenv.config();
const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.set('views', './views');
app.set('view engine', 'pug');
// Serve static assets from the `public` directory (so /css/style.css and /js/script.js work)
app.use(express.static(path.join(__dirname, 'public')));
RouterClient(app);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});