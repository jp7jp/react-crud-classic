import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Users CRUD</h2>
        </div>
        <div className="navbar">
          <Link to="/users" className="link-menu">List Users</Link>
          <Link to="/users/new" className="link-menu">Create User</Link>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
