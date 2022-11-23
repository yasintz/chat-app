import styled from 'styled-components';
import { applyPureVueInReact } from 'veaury';
import { Route, Routes, Link } from 'react-router-dom';

import BasicVueComponent from './Basic.vue';

const StyledApp = styled.div``;

const BasicWithPure = applyPureVueInReact(BasicVueComponent);
export function App() {
  return (
    <StyledApp>
      <BasicWithPure />
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
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
