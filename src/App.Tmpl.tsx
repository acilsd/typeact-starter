import * as React from 'react';
import { hot } from 'react-hot-loader';

interface IProps {
  test?: any;
}

class App extends React.Component<IProps> {
  render() {
    return (
      <div>Hello teaw st world</div>
    );
  }
}

export default hot(module)(App);
