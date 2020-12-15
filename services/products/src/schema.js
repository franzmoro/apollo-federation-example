const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product @key(fields: "id") {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    product(id: ID!): Product!
    products: [Product]!
  }
`;

module.exports = { typeDefs };