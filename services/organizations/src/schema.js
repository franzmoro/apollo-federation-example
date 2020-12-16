const { gql } = require("apollo-server");

const typeDefs = gql`
  enum UserRole {
    ADMIN
    NORMAL_USER
  }

  type Organization @key(fields: "id") {
    id: ID!
    name: String!
    description: String
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    organization: Organization!
  }

  type Query {
    organizations: [Organization!]!
    myOrganization: Organization!
  }
`;

module.exports = { typeDefs };