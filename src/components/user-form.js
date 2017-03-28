import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {

  render() {
    const { header, handleSubmit, pristine, submitting } = this.props;

    if (this.props.finished) {
      return <Redirect to="/users" />
    }

    return (
      <div className="component">
        <h3>{header}</h3>
        <form onSubmit={handleSubmit}>
          Error: {this.props.userError || 'No errors'}<br />
          E-Mail: <Field name="email" component="input" type="text" /><br />
          Password: <Field name="password" component="input" type="text" /><br />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(reduxForm({
  form: 'user'
})(UserForm));
