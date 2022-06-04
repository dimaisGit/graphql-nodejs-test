import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;
