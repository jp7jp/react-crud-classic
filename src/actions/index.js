import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';
export const EDIT_USER = 'EDIT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const getUsers = () => {
  const request = axios.get('http://localhost:3001/users');

  return {
    type: GET_USERS,
    payload: request
  }
}

export const getUser = (id) => {
  const request = axios.get(`http://localhost:3001/users/${id}`);

  return {
    type: GET_USER,
    payload: request
  }
}

export const createUser = (user) => {
  const request = axios.post('http://localhost:3001/users', user);

  return {
    type: CREATE_USER,
    payload: request
  }
}

export const editUser = (id) => {
  const request = axios.get(`http://localhost:3001/users/${id}`);

  return {
    type: EDIT_USER,
    payload: request
  }
}

export const updateUser = (id, user) => {
  const request = axios.put(`http://localhost:3001/users/${id}`, user);

  return {
    type: UPDATE_USER,
    payload: request
  }
}

export const deleteUser = (id) => {
  const request = axios.delete(`http://localhost:3001/users/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  }
}
