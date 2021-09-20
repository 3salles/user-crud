import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
