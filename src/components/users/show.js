import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../actions';

class UsersShow extends Component {

  componentWillMount(nextProps) {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    if(this.props.error) {
      return <div>{this.props.error}</div>
    }
    if(!this.props.user) {
      return <div>Loading...</div>
    }
    return (
      <div className="well">
        <h3>Show User</h3>
        <dl key={this.props.match.params.id}>
          <dt>Email:</dt>
          <dd>{ this.props.user.email }</dd>
          <dt>Password:</dt>
          <dd>{ this.props.user.password }</dd>
        </dl>
        <Link to={`/users`}>Cancel / Go Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    error: state.users.error
  }
}

export default connect(mapStateToProps, { getUser })(UsersShow);
