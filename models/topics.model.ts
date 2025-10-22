import mongoose from "mongoose";
const topicSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    listUser:Array,
    createdBy: String,
    parentTaskId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  { collection: "topics" }
);

const Topic = mongoose.model("Topics", topicSchema, "Topics");

export default Topic;