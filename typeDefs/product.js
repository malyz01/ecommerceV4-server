const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    product(id: ID!): Product
    products: [Product!]!
  }

  extend type Mutation {
    productCreate(productInput: ProductInput!): Product
    productUpdate(productInput: ProductInput!): Product
  }

  input ProductInput {
    productCode: String!
    name: String!
    price: Float!
    views: Int!
    orientation: String!
    type: String!
    size: String!
    stock: Int!
    description: String
  }

  type Product {
    id: ID
    email: String!
    productCode: String!
    name: String!
    price: Float!
    views: Int!
    orientation: String!
    type: String!
    size: String!
    stock: Int!
    description: String
    productImage: ProductImage
    createdAt: String
    updatedAt: String
  }
`;
