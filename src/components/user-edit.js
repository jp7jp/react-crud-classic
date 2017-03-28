import React, { Component } from 'react';
import { editUser, updateUser } from '../actions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class UserEdit extends Component {

  updateUser(userId) {
    if (!this.props.editedUser || (this.props.editedUser._id !== userId)) {
      this.props.editUser(userId).then((user) => {
        this.props.initialize(this.props.editedUser);
      });
    }
  }

  componentWillUpdate(nextProps) {
    this.updateUser(nextProps.match.params.id);
  }

  componentWillMount() {
    this.updateUser(this.props.match.params.id);
  }

  handleOnSubmit(values) {
    this.props.updateUser(this.props.editedUser._id, values);
    //this.props.reset();
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
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
    editedUser: state.users.editedUser,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { editUser, updateUser })(reduxForm({
  form: 'editUserForm'
})(UserEdit));
