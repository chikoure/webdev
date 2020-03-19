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
        dispatch(fetchSprintsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchSprintsFail(err));
      });
  };
};