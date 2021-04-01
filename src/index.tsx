import 'react-hot-loader/patch';
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return <div>hehmda</div>;
};

const Main = hot(App);

ReactDOM.render(<Main />, document.getElementById('root'));
