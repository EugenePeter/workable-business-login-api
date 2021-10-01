import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { gql } from "apollo-server-express";
import { user_resolvers, user_type_defs } from "./user";

const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [defaultTypeDefs, user_type_defs],
  resolvers: [user_resolvers],
});

export const initializeApolloServer = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema,
    context: {},
  });

  apolloServer.applyMiddleware({ app });
  console.log("APOLLO SERVER INITIALIZED");
};
