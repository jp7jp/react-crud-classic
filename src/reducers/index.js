import { combineReducers } from 'redux';
import { usersReducer } from './users-reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  users: usersReducer,
  form: formReducer
});
