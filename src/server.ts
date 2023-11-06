import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import app from "./app";
import config from "./config";
import { logger } from "./utils/logger";

async function main() {
  const gqlServer = new ApolloServer({
    typeDefs: `
    type Query {
      helloWorld: String
      say(name: String): String
    }
    `, //schema here
    resolvers: {
      Query: {
        helloWorld: () => `hello world`,
        say: (_, { name }: { name: string }) => `Hey there, user - "${name}"`,
      },
    },
  });
  // start gql server
  await gqlServer.start();
  app.use(expressMiddleware(gqlServer));
  app.listen(config.port, () =>
    logger.info("Starting gql server at port " + config.port)
  );
}

main();
