import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

import { gql } from '../gql';

import { Ui } from '@ui';
import useAuthStore from '../store/auth';

gql(`
  query App {
    app {
      id
    }
  }
`);

const StyledApp = styled.div`
  // Your style here
`;

// setInterval(() => {
//   useAuthStore.getState().setToken(Math.random().toString());
// }, 1000);

export function App() {
  const { authenticated, tokens } = useAuthStore();

  console.log({ authenticated, ...tokens });

  return (
    <StyledApp>
      <Ui />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      from ('|")zustand
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
