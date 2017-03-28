import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <h3 className="text-muted pull-left">React CRUD Classic</h3>
          <div className="btn-group pull-right">
            <Link to="/users" className="btn btn-default">List Users</Link>
            <Link to="/users/new" className="btn btn-primary">Create User</Link>
          </div>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
