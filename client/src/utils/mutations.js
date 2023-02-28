import { gql } from '@apollo/client';

export const ADD_TECH = gql`
  mutation UpdateTech($backTech: [String], $frontTech: [String]) {
    updateTech(backTech: $backTech, frontTech: $frontTech) {
      frontTech
      backTech
    }
  }
`;

export const UPDATE_TECH = gql`
mutation UpdateTech($backTech: [String], $frontTech: [String]) {
  updateTech(backTech: $backTech, frontTech: $frontTech) {
    frontTech
    backTech
  }
}
`

export const ADD_PROJECT = gql`
  mutation AddProject($name: String!, $description: String!, $backTech: [String], $frontTech: [String], $website: String, $github: String, $images: [String]) {
    addProject(name: $name, description: $description, backTech: $backTech, frontTech: $frontTech, website: $website, github: $github, images: $images) {
      _id
      backTech
      createdAt
      description
      frontTech
      github
      images
      name
      website
    }
  }
`;