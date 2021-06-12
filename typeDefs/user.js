const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    createUser(userInput: UserCreateInput!): Login
    login(userInput: UserInput!): Login
  }

  input UserCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    role: String
  }

  input UserInput {
    email: String!
    password: String!
  }

  type LoginData {
    id: ID!
    email: String!
  }

  type Login {
    user: LoginData!
    jwtToken: String!
  }

  type User {
    id: ID
    email: String!
    profile: Profile
    createdAt: String
    updatedAt: String
  }
`;
