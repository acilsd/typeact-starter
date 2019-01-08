import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../ui/Wrapper';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

interface IFPDetails extends RouteComponentProps {
  form: ITestStore;
}

const FormPersonalDetails = inject('form')(
  observer((props: IFPDetails) => {
    return (
      <Wrapper styles={{ padding: '10' }}>
          <Link to='/'> details </Link>
      </Wrapper>
    );
  }),
);

export { FormPersonalDetails };
