import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Wrapper } from '../../ui/Wrapper';

import { ITestStore } from '../../stores/TestStore';

import {
  AppBar,
  MuiThemeProvider,
  RaisedButton,
  TextField,
} from '../../ui/ExportMUI';

interface IFUDetails extends RouteComponentProps {
  form: ITestStore;
}

const FormFields = [
  { field: 'firstName', label: 'First name' },
  { field: 'secondName', label: 'Second name' },
  { field: 'email', label: 'Enter email'},
];

const FormUserDetails = inject('form')(
  observer((props: IFUDetails) => {
    const { form } = props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='User details'/>
          <Wrapper>
            {FormFields.map((fields, idx) => {
              return (
                <TextField
                  key={idx}
                  hintText={fields.label}
                  floatingLabelText={fields.label}
                  onChange={(e) => form.handleCHange(fields.field, e.target.value)}
                  defaultValue={form[fields.field]}
                />
                );
              })}
            <RaisedButton style={{ marginTop: '20px' }} primary>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/details'>Continue</Link>
            </RaisedButton>
          </Wrapper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }),
);

export { FormUserDetails };
