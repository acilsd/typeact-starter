import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../../stores/TestStore';

import styled from '../../styled/theme';
import { Wrapper } from '../../ui/Wrapper';

// if u haev any params
// interface IProps extends RouteComponentProps<{ id: string }> {

const Div = styled('div')`
  display: flex;
  flex-flow: column wrap;

  & > h2 {
    margin-bottom: 20px;
  };

  & > p {
    font-size: 20px;
    margin-bottom: 10px;
  };
`;

interface IFUDetails extends RouteComponentProps {
  form: ITestStore;
}

const FormUserDetails = inject('form')(
  observer((props: IFUDetails) => {
    return (
      <Wrapper styles={{ padding: '10' }}>
        <Div>
          <Link to='/two'> index </Link>
        </Div>
      </Wrapper>
    );
  }),
);

export { FormUserDetails };
