import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (args: any, res: any) => {
      return "HELLOEOE";
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
const options = {
  port: 3000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);

// server.start(({playground:"/playground"}) => console.log("Server is running on localhost:4000"));

// console.log('Hello World!');

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
