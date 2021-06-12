const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    productImage(id: ID!): ProductImage
    productImages: [ProductImage!]!
  }

  extend type Mutation {
    productImageCreate(productImageInput: ProductInput!): ProductImage
    productImageUpdate(productImageInput: ProductInput!): ProductImage
  }

  input ProductImageInput {
    productId: ID!
    name: String!
    url: Float!
    type: Int!
    description: String
  }

  type ProductImage {
    productId: ID!
    name: String!
    url: String!
    type: String!
    description: String
    createdAt: String
    updatedAt: String
  }
`;
