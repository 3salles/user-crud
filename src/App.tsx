import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user/new' exact component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
