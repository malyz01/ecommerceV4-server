const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    profile(id: String!): Profile
    profiles: [Profile!]!
  }

  extend type Mutation {
    createUserProfile(userProfile: InputUserProfile!): Profile!
  }

  input InputUserProfile {
    userId: ID
    firstName: String
    lastName: String
    avatar: String
  }

  type Profile {
    id: ID
    userId: ID
    firstName: String
    lastName: String
    avatar: String
    createdAt: String
    updatedAt: String
  }
`;
