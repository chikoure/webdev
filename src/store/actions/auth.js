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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
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
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user._id);
        dispatch(authSuccess(response.data.token, response.data.user._id));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START
  };
};

export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS
  };
};

export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error
  };
};

export const register = (
  firstName,
  lastName,
  email,
  password,
  phone,
  society,
  siret,
  status,
  profil
) => {
  return (dispatch) => {
    dispatch(registerStart());
    const authData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      society: society,
      siret: siret,
      status: status,
      profil: profil
    };
    let url = 'http://localhost:3001/users';
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(registerSuccess());
      })
      .catch((err) => {
        dispatch(registerFail(err.response.data.error));
      });
  };
};

export const authCheckState = () => {
  //keep the user connected while token is valid
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId));
    }
  };
};
