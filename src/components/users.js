import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../actions';

class Users extends Component {

  componentWillMount() {
    this.props.getUsers();
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
    if(!this.props.users.all.length) {
      return <div>Loading...</div>
    }
    return (
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
          { this.props.users.all.map(user => this.renderRow(user)) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
