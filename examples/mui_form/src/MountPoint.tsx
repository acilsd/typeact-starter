import * as React from 'react';
import { hot } from 'react-hot-loader';

import { RouteComponentProps } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

import { FormUserDetails } from './components/FormUserDetails';
import { FormPersonalDetails } from './components/FormPersonalDetails';
import { FormConfirm } from './components/FormConfirm';
import { FormSuccess } from './components/FormSuccess';

import { GlobalStyle } from './styled/theme';

const MountPoint: React.SFC<RouteComponentProps<any>> = (props) => {
  // yay, our props are already typed! but we dont need em here :P
  // props
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Switch>
        <Route exact path={'/'} component={FormUserDetails} />
        <Route exact path={'/details'} component={FormPersonalDetails} />
        <Route exact path={'/confirm'} component={FormConfirm} />
        <Route exact path={'/success'} component={FormSuccess} />
      </Switch>
    </React.Fragment >
  );
};

export default hot(module)(MountPoint);
