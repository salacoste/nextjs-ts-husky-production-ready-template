import { gql } from 'graphql-request';

export const typeDefs = gql`
  type Tool {
    id: String
    name: String
    description: String
    link: String
    image: String
    updatedAt: String
    createdAt: String
  }

  type Query {
    getTools: [Tool!]!
    getId: String
    getTool(id: String!): Tool
  }
  type Mutation {
    addTool(
      name: String!
      link: String!
      description: String!
      image: String!
      ): Tool
    deleteTool(id: String!): Tool

  }
`;
