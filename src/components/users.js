import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser } from '../actions';

class Users extends Component {

  componentWillMount() {
    this.props.getAllUsers();
  }

  handleRemoveClick(user) {
    this.props.deleteUser(user);
  }

  renderRow(user) {
    return (
      <tr key={user._id}>
        <td><Link to={`/users/${user._id}`}>Show</Link></td>
        <td><Link to={`/users/${user._id}/edit`}>Edit</Link></td>
        <td><span onClick={() => this.handleRemoveClick(user._id)}>Delete</span></td>
        <td>{user.email}</td>
      </tr>
    )
  }

  render() {
    if(this.props.error) {
      return <div>{this.props.error}</div>
    }
    if(!this.props.users.length) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/users/new">Create User</Link>
        <table>
          <thead>
            <tr>
              <td>Show</td>
              <td>Edit</td>
              <td>Delete</td>
              <td>User</td>
            </tr>
          </thead>
          <tbody>
            { this.props.users.map(user => this.renderRow(user)) }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
    error: state.users.error
  }
}

export default connect(mapStateToProps, { getAllUsers, deleteUser })(Users);
