import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App.Tmpl';

const mount = document.getElementById('mount');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  mount,
);
