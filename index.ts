import express, { Express,Router,Request,Response } from "express";
import dotenv from "dotenv";
import database from "./config/database.config";
database();
dotenv.config();
const app: Express = express();
const port: number = 3000;
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});