import Topic from "../../models/topics.model";
import { Request, Response } from "express";
export const index = async (req: Request, res: Response) => {
    const findCondition = { deleted: false };
    const topics = await Topic.find(findCondition);
    console.log(topics);
    // Pass locals as the second argument to res.render
    res.render('client/pages/topics/index.pug', {
        topics: topics,
        pageTitle: 'Topics Page'
    });
}
