import React, { Component } from 'react';
import { createUser } from '../actions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {

  handleOnSubmit(values) {
    this.props.createUser(values);
    this.props.reset();
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="component">
        <h3>New User</h3>
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
    newUser: state.users.newUser,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { createUser })(reduxForm({
  form: 'createUser'
})(UserForm));
