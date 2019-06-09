import * as React from 'react';
import { useLocalStore } from 'mobx-react';

import { createStore, ITestStore } from './store';

const createStoreContext = React.createContext<ITestStore>(createStore());

const TestStoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);
  return <createStoreContext.Provider value={store}>{children}</createStoreContext.Provider>;
};

const useTestStore = () => {
  const store = React.useContext(createStoreContext);
  return store;
};

export {
  TestStoreProvider,
  useTestStore,
};
