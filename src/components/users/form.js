import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class UsersForm extends Component {

  render() {
    const { header, handleSubmit, pristine, submitting, userError, finished } = this.props;

    if (finished) {
      return <Redirect to="/users" />
    }

    return (
      <div className="well">
        <h3>{header}</h3>
        <form onSubmit={handleSubmit}>
          <div className={ userError ? 'alert alert-danger' : 'alert alert-info' }>Error: {userError || 'No errors'}</div>
          <div className="form-group">
            <label>Email:</label>
            <Field name="email" component="input" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <Field name="password" component="input" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          </div>
          <Link to={`/users`}>Cancel / Go Back</Link>
        </form>
      </div>
    );
  }
}

export default connect()(reduxForm({
  form: 'user'
})(UsersForm));
