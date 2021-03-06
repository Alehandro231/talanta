import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './lib/history';
import { Provider } from 'react-redux';
import Home from './pages';
import store from './store';
import './styles/reset.css';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';
import Account from './pages/Account';
import Admin from './pages/Admin';
import CategoriesInteresets from './pages/CategoriesInteresets';
import Questionnaire from './pages/Questionnaire';
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  AUTHORIZATION_ROUTE,
  CATEGORIES_INTERESTS_ROUTE,
  HOME_ROUTE,
  QUESTIONNAIRE,
  REGISTRATION_ROUTE,
} from './lib/constants';

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route path={AUTHORIZATION_ROUTE} component={Authorization} />
        <Route path={REGISTRATION_ROUTE} component={Registration} />
        <Route path={ACCOUNT_ROUTE} component={Account} />
        <Route path={ADMIN_ROUTE} component={Admin} />
        <Route path={QUESTIONNAIRE} component={Questionnaire} />
        <Route
          path={CATEGORIES_INTERESTS_ROUTE}
          component={CategoriesInteresets}
        />
      </Switch>
    </Router>
  </Provider>
);

export default App;
