import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/Home';
import { User } from './pages/User';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user/new' exact component={User} />
          <Route path='/user/edit/:id' exact component={User} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
