import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../ui/Wrapper';

import {
  AppBar,
  MuiThemeProvider,
  RaisedButton,
} from '../../ui/ExportMUI';

const FormSuccess = () => {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success'/>
          <Wrapper>
            <h2>Yay, congratz!</h2>
            <div style={{ display: 'flex', width: '250px', justifyContent: 'center'}}>
              <RaisedButton style={{ marginTop: '20px' }} primary>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/confirm'>Back</Link>
              </RaisedButton>
            </div>
          </Wrapper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  };

export { FormSuccess };
