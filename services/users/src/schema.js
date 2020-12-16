const { gql } = require("apollo-server");

const typeDefs = gql`
  enum UserRole {
    ADMIN
    NORMAL_USER
  }

  type User @key(fields: "id") {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: UserRole
  }

  extend type Organization @key(fields: "id") {
    id: ID! @external
    users: [User!]!
  }

  type Query {
    allUsers: [User]!
    User(id: ID!): User!
    me: User!
  }
`;

module.exports = { typeDefs };