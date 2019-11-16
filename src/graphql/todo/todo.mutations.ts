import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString } from "graphql";
import { iContext } from "../../serverConfig/context";

const GraphQLCreateTodoMutation = mutationWithClientMutationId({
  name: "createTodo",
  inputFields: {
    title: { type: GraphQLString }
  },
  outputFields: {},
  mutateAndGetPayload: ({ title }, ctx: iContext) => {}
});

const GraphQLTodoMutations = {
  createTodo: GraphQLCreateTodoMutation
};

export { GraphQLTodoMutations };
