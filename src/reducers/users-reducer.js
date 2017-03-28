import {
  GET_ALL_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER
} from '../actions';

const INITIAL_STATE = {
  all: [],
  user: null,
  newUser: null,
  error: ''
}

export const usersReducer = (state = INITIAL_STATE, action) => {

  if (action.error) {
    return {
      ...state,
      error: `Action ${action.type} ${action.payload.message}`
    };
  }

  let index;

  switch(action.type) {

    case GET_ALL_USERS:
      return {
        ...state,
        all: action.payload.data,
        error: ''
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload.data,
        error: ''
      };

    case CREATE_USER:
      return {
        ...state,
        all: [
          ...state.all,
          action.payload.data
        ],
        error: ''
      };

    case UPDATE_USER:
      index = state.all.findIndex(
        user => user._id === action.payload.data._id
      );
      return {
        ...state,
        all: [
          ...state.all.slice(0, index),
          action.payload.data ,
          ...state.all.slice(index + 1)
        ],
        error: ''
      };

    case DELETE_USER:
      index = state.all.findIndex(
        user => user._id === action.payload.data._id
      );
      return {
        ...state,
        all: [
          ...state.all.slice(0, index),
          ...state.all.slice(index + 1)
        ],
        error: ''
      };

    default:
      return state;

  }
}
