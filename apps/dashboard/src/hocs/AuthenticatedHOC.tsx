/* eslint-disable react-hooks/rules-of-hooks */
//#region Import
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client';
import React from 'react';
import { AuthenticatedPageLayout } from '../components/common/layouts/AuthenticatedPageLayout';
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

//#region Props
export interface AuthenticatedProps {
  app: any;
  customer: any;
}
//#endregion

export const AuthenticatedHOC =
  (Component: React.ComponentType<any>) => (props: any) => {
    const [customerId] = useAuthStore((s) => [s.customerId]);
    const { data, loading, error } = useQuery(getCurrentCustomerWithAppQuery, {
      variables: { customerId },
    });

    const customer = data?.customer[0];
    const app = customer?.app;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error || !customer) {
      return <div>Error</div>;
    }

    return (
      <AuthenticatedPageLayout>
        <Component {...props} app={app} customer={customer} />
      </AuthenticatedPageLayout>
    );
  };
