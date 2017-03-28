import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions';
import UsersForm from './form';

class UserEdit extends Component {

  state = {
    finished: false
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.id);
  }

  handleSubmit(values) {
    this.props.updateUser(this.props.user._id, values).then(() => {
      if (!this.props.userError) {
        this.setState({
          finished: true
        });
      }
    });
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }
    return (
      <UsersForm
        header='Edit User'
        onSubmit={this.handleSubmit.bind(this)}
        initialValues={this.props.user}
        userError={this.props.userError}
        finished={this.state.finished}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { getUser, updateUser })(UserEdit);
