import { Todo } from "../../schema/todo/todo.model";
import { toObjectId } from "../../common/mongoose";

class TodoRepository {
  private static instance: TodoRepository;

  async createTodo({ title, userId }: { title: string; userId: string }) {
    const todo = new Todo({
      title,
      userId: toObjectId(userId),
      completed: false
    });

    await todo.save();

    return { status: "SUCCESS", message: "Todo created successfully!" };
  }

  async editTodo({
    todoId,
    userId,
    edits
  }: {
    todoId: string;
    userId: string;
    edits: object;
  }) {
    const updated = await Todo.updateOne(
      { _id: toObjectId(todoId), userId: toObjectId(userId) },
      { edits }
    );

    if (!updated) {
      return { status: "FAILED", message: "Todo not found!" };
    }
    return { status: "SUCCESS", message: "Todo updated successfully!" };
  }

  async deleteCompletedTodos(userId: string) {
    const del = await Todo.deleteMany({
      userId: toObjectId(userId),
      completed: true
    });

    console.log({ del });
  }

  public static getInstance(): TodoRepository {
    if (!TodoRepository.instance) {
      TodoRepository.instance = new TodoRepository();
    }
    return TodoRepository.instance;
  }
}

export { TodoRepository };
