import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const StyledDiv = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const App = () => (
  <StyledDiv>
    <p>Hello world</p>
  </StyledDiv>
);

export default hot(module)(App);
