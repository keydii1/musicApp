import express,{Express} from "express";
const router = express.Router();
import * as controller from "../../controllers/client/topic.controller";
import Topic from "../../models/topics.model";
router.get("/",controller.index);
export default router;