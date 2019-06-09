import * as React from 'react';
import { render } from 'react-dom';

import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { RouteComponentProps, Router } from 'react-router-dom';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

import MountPoint from './MountPoint';

const root = document.getElementById('root');

render(
  <Router history={history}>
    <MountPoint {...({} as RouteComponentProps<any>)} />
  </Router>,
  root,
);
