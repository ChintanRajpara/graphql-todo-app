import mongoose from "mongoose";
import { TodoModel } from "./todo.typeDef";

const todoSchema = new mongoose.Schema(
  {
    userId: mongoose.model("User"),
    title: String,
    completed: Boolean
  },
  {
    timestamps: true
  }
);

const Todo = mongoose.model<TodoModel>("Todo", todoSchema);
export { Todo };
