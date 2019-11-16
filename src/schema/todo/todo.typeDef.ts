import mongoose from "mongoose";

export interface TodoModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  title: string;
  completed: boolean;
}
