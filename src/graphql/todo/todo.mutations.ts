import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLBoolean, GraphQLList } from "graphql";
import { iContext } from "../../serverConfig/context";

const GraphQLCreateTodoMutation = mutationWithClientMutationId({
  name: "createTodo",
  inputFields: {
    title: { type: GraphQLString }
  },
  outputFields: {
    status: { type: GraphQLString },
    message: { type: GraphQLString }
  },
  mutateAndGetPayload: async ({ title }, ctx: iContext) => {
    const { userId }: any = await ctx.getUserId();
    // const userId = "";
    return await ctx._todoRepositoryInstance.createTodo({ title, userId });
  }
});

const GraphQLEditTodoMutation = mutationWithClientMutationId({
  name: "editTodo",
  inputFields: {
    id: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
    title: { type: GraphQLString }
  },
  outputFields: {
    status: { type: GraphQLString },
    message: { type: GraphQLString }
  },
  mutateAndGetPayload: async ({ id, completed, title }, ctx: iContext) => {
    const { userId }: any = await ctx.getUserId();
    const cedit = completed ? { completed } : {};
    const tedit = title ? { title } : {};
    return await ctx._todoRepositoryInstance.editTodo({
      todoId: id,
      userId,
      edits: { ...cedit, ...tedit }
    });
  }
});
const GraphQLDeleteCompletedTodosMutation = mutationWithClientMutationId({
  name: "deleteCompletedTodos",
  inputFields: {},
  outputFields: {
    status: { type: GraphQLString },
    message: { type: GraphQLString },
    deletedTodoIds: { type: new GraphQLList(GraphQLString) }
  },
  mutateAndGetPayload: async ({ id, completed, title }, ctx: iContext) => {
    const { userId }: any = await ctx.getUserId();

    return await ctx._todoRepositoryInstance.deleteCompletedTodos(userId);
  }
});

const GraphQLTodoMutations = {
  createTodo: GraphQLCreateTodoMutation,
  editTodo: GraphQLEditTodoMutation,
  deleteCompletedTodos: GraphQLDeleteCompletedTodosMutation
};

export { GraphQLTodoMutations };
