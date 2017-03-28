import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Users from './components/users';
import User from './components/user';
import UserForm from './components/user-form';
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
        <div className="row">
          <div className="col">
            <Route path="/users" component={Users} />
          </div>
          <div className="col">
            <Route path="/users/:id" component={User} />
          </div>
          <div className="col">
            <UserForm />
            <Route path="/users/:id/edit" component={UserEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
