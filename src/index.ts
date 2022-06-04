import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });

const start = async (): Promise<void> => {
  const { url } = await server.listen();
  console.log(`Server is now running at ${url}`);
};

start();
