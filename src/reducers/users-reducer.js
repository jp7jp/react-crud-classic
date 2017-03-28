import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  EDIT_USER,
  UPDATE_USER,
  DELETE_USER
} from '../actions';

const INITIAL_STATE = {
  all: [],
  user: null,
  newUser: null,
  editedUser: null,
  error: ''
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, all: action.payload.data };
    case GET_USER:
      return { ...state, user: action.payload.data };
    case CREATE_USER:
      if (action.error) {
        return { ...state, error: 'Unable to create user' };
      }
      return { ...state, all: [ ...state.all, action.payload.data ], error: '' };
    case EDIT_USER:
      return { ...state, editedUser: action.payload.data };
    case UPDATE_USER:
      if (action.error) {
        return { ...state, error: 'Unable to update user' };
      }
      const index = state.all.findIndex((user) => user._id === action.payload.data._id );
      return {
        ...state,
        all: [ ...state.all.slice(0, index), action.payload.data , ...state.all.slice(index + 1) ],
        error: ''
      };
    case DELETE_USER:
      if (action.error) {
        return { ...state, error: 'Unable to delete user' };
      }
      const indexToDelete = state.all.findIndex((user) => user._id === action.payload.data._id );
      return {
        ...state,
        all: [ ...state.all.slice(0, indexToDelete), ...state.all.slice(indexToDelete + 1) ],
        error: ''
      };
    default:
      return state;
  }
}
