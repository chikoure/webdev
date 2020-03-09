import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password
    };
    let url = 'http://localhost:3001/users/login';
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user._id);
        dispatch(authSuccess(response.data.token, response.data.user._id));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};
