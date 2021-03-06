import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import UsersForm from './form';

class UsersNew extends Component {

  state = {
    finished: false
  }

  handleSubmit(values) {
    this.props.createUser(values).then(() => {
      if (!this.props.userError) {
        this.setState({
          finished: true
        });
      }
    });
  }

  render() {
    return (
      <UsersForm
        header='Create User'
        onSubmit={this.handleSubmit.bind(this)}
        userError={this.props.userError}
        finished={this.state.finished}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    newUser: state.users.newUser,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { createUser })(UsersNew);
