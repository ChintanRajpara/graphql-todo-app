import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { globalIdField, toGlobalId } from "graphql-relay";
import { GLOBAL_ID_TYPES } from "../globalIdTypes";
import { GraphQLTodoQueries } from "../todo/todo.queries";

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: ({ id }) => {
        return toGlobalId(GLOBAL_ID_TYPES.User, id);
      }
    },
    name: { type: GraphQLString },
    todos: GraphQLTodoQueries.todos
  })
});

export default GraphQLUser;
