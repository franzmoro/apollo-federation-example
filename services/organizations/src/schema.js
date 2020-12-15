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
    organization: Organization
  }

  type Organization @key(fields: "id") {
    id: ID!
    name: String!
    users: [User]
    description: String
  }

  type Query {
    me: User!
    user(id: ID!): User!
    myOrganization: Organization!
    allUsers: [User]!
  }
`;

module.exports = { typeDefs };