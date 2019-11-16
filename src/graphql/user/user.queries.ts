import GraphQLUser from "./user.typeDef";

const GraphQLUserQueries = {
  viewer: {
    type: GraphQLUser,
    resolve: () => {
      return { name: "Chintan Rajpara", id: "SLDKFJDSKFJSDKLJFKLDSJF" };
    }
  }
};

export { GraphQLUserQueries };
