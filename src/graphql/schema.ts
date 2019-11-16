import { GraphQLObjectType, GraphQLSchema } from "graphql";
// import GraphQLUser from "./user/user.typeDef";
import { GraphQLUserQueries } from "./user/user.queries";
import { GraphQLUserMutations } from "./user/user.mutations";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...GraphQLUserQueries
  }
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    ...GraphQLUserMutations
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
  // subscription: RootSubscription
});

export { schema };
