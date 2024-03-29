import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Routes from './scenes';

import ErrorHandler from './handlers/ErrorHandler';
import SystemMessageHandler from './handlers/SystemMessageHandler';
import AuthHandler from './handlers/AuthHandler';
import DatabaseHandler from './handlers/DatabaseHandler';
import NetworkHandler from './handlers/NetworkHandler';

// Helper to clear local storage during development
// if (__DEV__) {
//   persistor.purge();
// }

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorHandler>
          <SystemMessageHandler>
            <AuthHandler />
            <DatabaseHandler />
            <NetworkHandler />
            <Routes />
          </SystemMessageHandler>
        </ErrorHandler>
      </PersistGate>
    </Provider>
  );
}

export default App;
