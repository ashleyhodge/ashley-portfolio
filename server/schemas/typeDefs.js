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
    createdAt: String
  }

  type Query {
    projects: [Project]
    project(_id: ID!): Project
  }
  type Mutation {
    addProject(name: String!, description: String!, frontTech: [String], backTech: [String], website: String, github: String, images: [String]): Project
    deleteProject(projectId: ID!): Project
    updateProject(_id: ID!, name: String, description: String, frontTech: [String], backTech: [String], website: String, github: String, images: [String]): Project
  }
`;

module.exports = typeDefs