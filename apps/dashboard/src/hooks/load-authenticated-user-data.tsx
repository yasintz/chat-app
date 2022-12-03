/* eslint-disable react-hooks/rules-of-hooks */
//#region Import
import { useQuery } from '@apollo/client';
import React from 'react';
import { gql } from '../gql';
import useAuthStore from '../store/auth';
//#endregion

//#region GQL
const getCurrentCustomerWithAppQuery = gql(/* GraphQL */ `
  query home_getCurrentCustomerWithApp($customerId: uuid!) {
    customer(where: { id: { _eq: $customerId } }) {
      id
      firstName
      lastName
      app {
        id
        name
        customers {
          id
          email
          firstName
          lastName
          role
        }
      }
    }
  }
`);
//#endregion

export const useAuthenticatedUserData = () => {
  const [customerId] = useAuthStore((s) => [s.customerId]);
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery(getCurrentCustomerWithAppQuery, {
    variables: { customerId },
  });

  return {
    customer: data?.customer[0],
    app: data?.customer[0]?.app,
    isLoading,
    error,
  };
};
