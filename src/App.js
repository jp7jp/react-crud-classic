import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Users from './components/users';
import User from './components/user';
import UserCreate from './components/user-create';
import UserEdit from './components/user-edit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Users CRUD</h2>
        </div>
        <Link to="/users" className="link-menu">Users</Link>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/new" component={UserCreate} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/users/:id/edit" component={UserEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
