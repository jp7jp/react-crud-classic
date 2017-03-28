import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class UsersForm extends Component {

  render() {
    const { header, handleSubmit, pristine, submitting, userError, finished } = this.props;

    if (finished) {
      return <Redirect to="/users" />
    }

    return (
      <div className="component">
        <h3>{header}</h3>
        <form onSubmit={handleSubmit}>
          Error: {userError || 'No errors'}<br />
          <label>Email:</label>
          <Field name="email" component="input" type="text" /><br />
          <label>Password:</label>
          <Field name="password" component="input" type="text" /><br />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(reduxForm({
  form: 'user'
})(UsersForm));
