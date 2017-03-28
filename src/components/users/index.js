import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser } from '../../actions';

class UsersIndex extends Component {

  componentWillMount() {
    this.props.getAllUsers();
  }

  handleRemoveClick(user) {
    this.props.deleteUser(user);
  }

  renderRow(user) {
    return (
      <tr key={user._id}>
        <td><Link to={`/users/${user._id}/edit`} className="btn btn-primary">Edit</Link></td>
        <td><span onClick={() => this.handleRemoveClick(user._id)} className="btn btn-danger">X</span></td>
        <td width="99%"><Link to={`/users/${user._id}`}>{user.email}</Link></td>
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
      <div className="well">
        <h3>List Users</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Edit</th>
              <th>Delete</th>
              <th>User</th>
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

export default connect(mapStateToProps, { getAllUsers, deleteUser })(UsersIndex);
