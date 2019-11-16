import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { globalIdField, toGlobalId } from "graphql-relay";
import { GLOBAL_ID_TYPES } from "../globalIdTypes";

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
    todos: {
      type: new GraphQLObjectType({
        name: "todos",
        description: "Todos",
        fields: () => ({
          id: { type: GraphQLID },
          title: { type: GraphQLString }
        })
      })
    }
  })
});

export default GraphQLUser;
