import { Express } from "express";
import  topicRouter from "./topic.route";
export const RouterClient = (app: Express): void => {
    app.use("/topics", topicRouter);
};
export default RouterClient;