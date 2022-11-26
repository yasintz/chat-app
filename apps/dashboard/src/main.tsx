import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import client from './clients/apollo';
import { Routes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </StrictMode>
);
