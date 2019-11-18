import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from "graphql";
import {
  toGlobalId,
  nodeDefinitions,
  connectionDefinitions
} from "graphql-relay";
import { GLOBAL_ID_TYPES } from "../globalIdTypes";

const GraphqlTodo = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: ({ _id }) => {
        return toGlobalId(GLOBAL_ID_TYPES.Todo, _id);
      }
    },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  })
});

const {
  connectionType: GraphqlTodoConnection,
  edgeType
} = connectionDefinitions({ nodeType: GraphqlTodo });

export { GraphqlTodoConnection };
