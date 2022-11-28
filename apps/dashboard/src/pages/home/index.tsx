//#region Import
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { gql } from '../../gql';
import {
  AuthenticatedHOC,
  AuthenticatedProps,
} from '../../hocs/AuthenticatedHOC';
import useAuthStore from '../../store/auth';
//#endregion

//#region GQL
const updateAppNameMutation = gql(/* GraphQL */ `
  mutation home_updateAppName($appId: uuid!, $name: String!) {
    update_app_by_pk(pk_columns: { id: $appId }, _set: { name: $name }) {
      id
      name
    }
  }
`);

const createNewCustomerMutation = gql(/* GraphQL */ `
  mutation home_createNewCustomer($email: String!) {
    insert_customer_one(
      object: { email: $email, firstName: "f", lastName: "l", role: admin }
    ) {
      id
      firstName
      lastName
      appId
    }
  }
`);
//#endregion

export const HomePage = AuthenticatedHOC(
  ({ app, customer }: AuthenticatedProps) => {
    const [customerId] = useAuthStore((s) => [s.customerId]);
    const [newAppName, setNewAppName] = useState('');
    const [newCustomerEmail, setNewCustomerEmail] = useState('');

    const [updateAppName] = useMutation(updateAppNameMutation, {
      variables: {
        appId: customer?.app.id,
        name: newAppName,
      },
    });

    const [createNewCustomer] = useMutation(createNewCustomerMutation, {
      variables: { email: newCustomerEmail },
    });

    return (
      <>
        <h1>App: {app?.name}</h1>
        <h1>
          Customer: {customer.firstName} {customer.lastName}
        </h1>

        <hr />
        <div>
          <h2>Update App Name</h2>
          <input
            value={newAppName}
            onChange={(e) => setNewAppName(e.target.value)}
          />
          <button onClick={() => updateAppName()}>Update</button>
        </div>
        <hr />
        <div>
          <h2>Customers</h2>
          <ul>
            {app?.customers
              .filter((i) => i.id !== customerId)
              .map((cus) => (
                <li key={cus.id}>{cus.email}</li>
              ))}
          </ul>
          <input
            value={newCustomerEmail}
            onChange={(e) => setNewCustomerEmail(e.target.value)}
          />
          <button onClick={() => createNewCustomer()}>Add New Customer</button>
        </div>
      </>
    );
  }
);
