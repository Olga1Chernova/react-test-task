import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import {store} from 'redux/store';

import Navigation from 'modules/Navigation/Navigation';
import Header from 'modules/Header/Header';

function App() {
  return (
    <Provider store={store}>
      
        <BrowserRouter basename="/react-test-task">
          <Header />
          <Navigation />
          <UserRoutes />
        </BrowserRouter>
      
    </Provider>
  );
}

export default App;
