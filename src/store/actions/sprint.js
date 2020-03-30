import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchSprintsStart = () => {
  return {
    type: actionTypes.FETCH_SPRINTS_START
  };
};

export const fetchSprintsSuccess = (sprints) => {
  return {
    type: actionTypes.FETCH_SPRINTS_SUCCESS,
    sprints: sprints
  };
};

export const fetchSprintsFail = (error) => {
  return {
    type: actionTypes.FETCH_SPRINTS_FAIL,
    error: error
  };
};

export const fetchSprints = (token, projectId) => {
  return (dispatch) => {
    dispatch(fetchSprintsStart());

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios
      .get(`http://localhost:3001/sprints/${projectId}/all`, config)
      .then((res) => {
        console.log(res);
        const fetchedSprints = [];
        // for (let key in res.data) {
        //   fetchedSPRINTS.push({
        //     ...res.data[key],
        //     id: key
        //   });
        // }
        dispatch(fetchSprintsSuccess(res.data.sprints));
      })
      .catch((err) => {
        dispatch(fetchSprintsFail(err));
      });
  };
};

export const addSprintsStart = () => {
  return {
    type: actionTypes.ADD_SPRINTS_START
  };
};

export const addSprintsSuccess = (response) => {
  return {
    type: actionTypes.ADD_SPRINTS_SUCCESS,
    response: response
  };
};

export const addSprintsEnd = () => {
  return {
    type: actionTypes.ADD_SPRINTS_END
  };
};

export const addSprintsFail = (error) => {
  return {
    type: actionTypes.ADD_SPRINTS_FAIL,
    error: error
  };
};

export const addSprints = (
  token,
  projectId,
  title,
  startDate,
  dueDate,
  status
) => {
  return (dispatch) => {
    dispatch(addSprintsStart());
    const addSprintData = {
      title: title,
      startDate: startDate,
      dueDate: dueDate,
      status: status
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    let url = `http://localhost:3001/sprints/${projectId}`;
    axios
      .post(url, addSprintData, config)
      .then((response) => {
        console.log(response);
        dispatch(addSprintsSuccess(response.status));
        dispatch(addSprintsEnd());
      })
      .catch((err) => {
        dispatch(addSprintsFail(err.response));
      });
  };
};
