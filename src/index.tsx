import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
    * { margin: 0; padding: 0; }
`;

const root = document.getElementById('root');

render(<App />, root);
