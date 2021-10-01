import { gql } from "apollo-server-express";

export const user_type_defs = gql`
  type CompanyExist {
    company_name: String!
    email: String!
  }

  extend type Query {
    doesEmailExist(email: String): CompanyExist
  }

  type Company {
    id: ID!
    company_name: String!
  }

  input AddCompanyParams {
    company_name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createCompany(params: AddCompanyParams): Company!
  }
`;
