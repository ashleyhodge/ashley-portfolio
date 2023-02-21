import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query Projects {
    projects {
      _id
      backTech
      name
      createdAt
      description
      frontTech
      github
      images
      website
    }
  }
`;

export const QUERY_PROJECT = gql`
  query Project($id: ID!) {
    project(_id: $id) {
      _id
      backTech
      createdAt
      description
      github
      frontTech
      images
      name
      website
    }
  }
`;