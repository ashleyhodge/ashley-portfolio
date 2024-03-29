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

  type Tech {
    _id: ID
    frontTech: [String]
    backTech: [String]
    project: String
  }

  type Query {
    projects: [Project]
    tech(project: String): [Tech]
    project(_id: ID!): Project
  }

  type Mutation {
    addProject(name: String!, description: String!, website: String, github: String, images: [String], frontTech: [String], backTech: [String]): Project
    deleteProject(projectId: ID!): Project
    updateProject(_id: ID!, name: String, description: String, website: String, github: String, images: [String]): Project
    addTech(frontTech: [String], backTech: [String]): Tech
    updateTech(frontTech: [String], backTech: [String]): Tech
    deleteTech(frontTech: String, backTech: String): Tech
  }
`;

module.exports = typeDefs