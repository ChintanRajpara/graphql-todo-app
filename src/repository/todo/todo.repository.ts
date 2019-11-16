class TodoRepository {
  private static instance: TodoRepository;

  public static getInstance(): TodoRepository {
    if (!TodoRepository.instance) {
      TodoRepository.instance = new TodoRepository();
    }
    return TodoRepository.instance;
  }
}

export { TodoRepository };
