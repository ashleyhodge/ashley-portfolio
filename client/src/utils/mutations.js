import { gql } from '@apollo/client';

export const ADD_TECH = gql`
  mutation UpdateTech($backTech: [String], $frontTech: [String]) {
    updateTech(backTech: $backTech, frontTech: $frontTech) {
      frontTech
      backTech
    }
  }
`