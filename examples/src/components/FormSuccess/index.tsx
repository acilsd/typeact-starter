import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

import { Wrapper } from '../../ui/Wrapper';

interface IFSuccess extends RouteComponentProps {
  form: ITestStore;
}

const FormSuccess = inject('form')(
  observer((props: IFSuccess) => {
    return (
      <Wrapper styles={{ padding: '10' }}>
          <Link to='/'> success </Link>
      </Wrapper>
    );
  }),
);

export { FormSuccess };
