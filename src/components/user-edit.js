import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { getUser, updateUser } from '../actions';

class UserEdit extends Component {

  state = {
    finished: false
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.id).then((user) => {
      this.props.initialize(this.props.user);
    });
  }

  handleOnSubmit(values) {
    this.props.updateUser(this.props.user._id, values).then(() => {
      if (!this.props.userError) {
        this.setState({
          finished: true
        });
      }
    });
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    if (this.state.finished) {
      return <Redirect to="/users" />
    }
    return (
      <div className="component">
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit(this.handleOnSubmit.bind(this))}>
          Error: {this.props.userError || 'No errors'}<br />
          E-Mail: <Field name="email" component="input" type="text" /><br />
          Password: <Field name="password" component="input" type="text" /><br />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { getUser, updateUser })(reduxForm({
  form: 'editUserForm'
})(UserEdit));
