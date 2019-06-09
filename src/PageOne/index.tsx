import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { observer, Observer } from 'mobx-react';
import { action, observable } from 'mobx';

import {
  useTestStore,
} from '../stores/TestStore/index';

import styled from '../styled/theme';
import { Wrapper } from '../components/Wrapper';

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

const Btn = styled('div')`
  border: 1px solid black;
  border-radius: 2px;
  margin: 15px 0;
  &:hover {
    cursor: pointer;
  }
`;

// RouteComponentProps<{ id: string }> {

export const PageOne: React.SFC<RouteComponentProps<any>> = observer((props) => {
  const store = useTestStore();

  const handleClick = React.useCallback(() => {
    store.setField(Math.random().toString(), 'name');
    store.setField(Math.random().toString(), 'surname');
  }, []);

  // ааа падлы заберите свои хуки назад
  const shiiiit = observable.array([1, 2, 3, 4, 5]);

  const test = React.useCallback(action(() => {
    shiiiit.push(1);
  }), [shiiiit]);

  return (
    <Observer>
      {() => (
        <Wrapper styles={{ padding: '10' }}>
          <Div>
            <h2>Раньше было лучше</h2>
            <p>My name is: {store.fields.name || 'empty for now'}</p>
            <p>Mu surname is: {store.fields.surname || 'empty for now'}</p>

            <p>{shiiiit.map((i, idx) => <span key={idx}>{i}</span>)}</p>
            <Btn onClick={handleClick}>?</Btn>
            <Btn onClick={test}> ??? </Btn>

            <Link to='/two'> Two </Link>
          </Div>
        </Wrapper>
      )}
    </Observer>

  );
});
