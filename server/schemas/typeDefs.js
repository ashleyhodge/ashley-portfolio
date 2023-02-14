const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    description: String
    frontTech: [String]
    backTech: [String]
    website: String
    github: String
    images: [String]
  }

  type Query {
    projects: [Project]
    project(_id: ID!): Project
  }
`;

module.exports = typeDefs