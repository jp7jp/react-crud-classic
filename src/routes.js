import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UsersIndex from './components/users/index.js';
import UsersShow from './components/users/show.js';
import UsersNew from './components/users/new.js';
import UsersEdit from './components/users/edit.js';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (
      <Redirect to="/users" />
    )} />
    <Route exact path="/users" component={UsersIndex} />
    <Route exact path="/users/new" component={UsersNew} />
    <Route exact path="/users/:id" component={UsersShow} />
    <Route exact path="/users/:id/edit" component={UsersEdit} />
  </Switch>
);

export default Routes;
