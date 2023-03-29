import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import UserRoutes from './UserRoutes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/react-test-task">
            <UserRoutes />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
