import * as React from 'react';
// import { useLocalStore } from 'mobx-react';

import { ITestStore, testStore } from './store';

const createStoreContext = React.createContext<ITestStore>(testStore);

const useTestStore = () => React.useContext(createStoreContext);

// we don't need this actually, but still in some cases proper Provider setup would be useful
// note you dont need to pass an actual createStore function call in that case but null

// const TestStoreProvider = ({ children }) => {
//   const store = useLocalStore(createStore);
//   return <createStoreContext.Provider value={store}>{children}</createStoreContext.Provider>;
// };

export {
  // TestStoreProvider,
  useTestStore,
};
