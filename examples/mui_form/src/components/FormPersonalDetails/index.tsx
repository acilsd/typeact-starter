import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../ui/Wrapper';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

import {
  AppBar,
  MuiThemeProvider,
  RaisedButton,
  TextField,
} from '../../ui/ExportMUI';

interface IFPDetails extends RouteComponentProps {
  form: ITestStore;
}

const FormFields = [
  { field: 'occupation', label: 'Occupation' },
  { field: 'city', label: 'City' },
  { field: 'bio', label: 'Somethin about u'},
];

const FormPersonalDetails = inject('form')(
  observer((props: IFPDetails) => {
    const { form } = props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Personal details'/>
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
            <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between'}}>
              <RaisedButton style={{ marginTop: '20px' }} primary>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Back</Link>
              </RaisedButton>
              <RaisedButton style={{ marginTop: '20px' }} primary>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/confirm'>Continue</Link>
              </RaisedButton>
            </div>
          </Wrapper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }),
);

export { FormPersonalDetails };
