import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import { Request, Response } from "express";
// import viewer from "./graphql/typeDefs/user/user.typedef";
// import { GraphQLObjectType } from "graphql";
import { schema } from "./graphql/schema";
import { ContextRepository } from "./serverConfig/context";

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const  q = new GraphQLObjectType({
//   Query: viewer
// })

// const resolvers = {
//   Query: {
//     hello: (args: any, res: any) => {
//       return "HELLOEOE";
//     }
//   }
// };

mongoose.connect(
  "mongodb://localhost:27017/todo_app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    console.log("Server is connected to mongodb");
  }
);

const context = (req: Request, res: Response) => {
  return ContextRepository.getInstance(req, res);
};

const server = new GraphQLServer({
  schema,
  context
});

const options = {
  port: 8080,
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
