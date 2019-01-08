import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../ui/Wrapper';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

interface IFConfirm extends RouteComponentProps {
  form: ITestStore;
}

const FormConfirm = inject('form')(
  observer((props: IFConfirm) => {
    return (
      <Wrapper styles={{ padding: '10' }}>
          <Link to='/'> confirm </Link>
      </Wrapper>
    );
  }),
);

export { FormConfirm };
