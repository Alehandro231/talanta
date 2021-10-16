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
import CategoriesInteresets from './pages/CategoriesInteresets';
import { ACCOUNT_ROUTE, ADMIN_ROUTE, AUTHORIZATION_ROUTE, CATEGORIES_INTERESTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from './lib/constants';

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route path={AUTHORIZATION_ROUTE} component={Authorization} />
        <Route path={LOGIN_ROUTE} component={Login} />
        <Route path={ACCOUNT_ROUTE} component={Account} />
        <Route path={ADMIN_ROUTE} component={Admin} />
        <Route path={CATEGORIES_INTERESTS_ROUTE} component={CategoriesInteresets} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
