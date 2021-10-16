import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './lib/history';
import { Provider } from 'react-redux';
import Home from './pages';
import store from './store';
import './styles/reset.css';
import Authorization from './pages/Authorization';
import Login from './pages/Login';
import Account from './pages/Account';
import Admin from './pages/Admin';

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/authorization'} component={Authorization} />
        <Route path={'/login'} component={Login} />
        <Route path={'/account'} component={Account} />
        <Route path={'/admin'} component={Admin} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
