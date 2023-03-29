import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';

import Navigation from 'modules/Navigation/Navigation';
import Header from 'modules/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
