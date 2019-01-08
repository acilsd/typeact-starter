import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../ui/Wrapper';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

import {
  AppBar,
  List,
  ListItem,
  MuiThemeProvider,
  RaisedButton,
} from '../../ui/ExportMUI';

interface IFConfirm extends RouteComponentProps {
  form: ITestStore;
}

const FormConfirm = inject('form')(
  observer((props: IFConfirm) => {
    const { form } = props;
    const values = form.getValues();

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm'/>
          <Wrapper>
            <List>
              {values.map((val) => {
                return <ListItem key={val.label} primaryText={val.value} secondaryText={val.label}/>;
              })}
            </List>
            <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between'}}>
              <RaisedButton style={{ marginTop: '20px' }} primary>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/details'>Back</Link>
              </RaisedButton>
              <RaisedButton style={{ marginTop: '20px' }} primary>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/success'>Confirm</Link>
              </RaisedButton>
            </div>
          </Wrapper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }),
);

export { FormConfirm };
