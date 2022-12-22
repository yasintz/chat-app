import { gql } from '../../gql';

export const getCustomerByEmailQuery = gql(/* GraphQL */ `
  query AuthServiceGetCustomerByEmail($email: String!) {
    customer(where: { email: { _eq: $email } }) {
      id
      encryptedPassword
      appId
    }
  }
`);

export const getMemberByEmailQuery = gql(/* GraphQL */ `
  query AuthServiceGetMemberByEmail($email: String!) {
    member(where: { externalId: { _eq: $email } }) {
      id
      appId
      encryptedPassword
    }
  }
`);
