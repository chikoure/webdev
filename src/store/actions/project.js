import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchProjectsStart = () => {
  return {
    type: actionTypes.FETCH_PROJECTS_START
  };
};

export const fetchProjectsSuccess = (projects) => {
  return {
    type: actionTypes.FETCH_PROJECTS_SUCCESS,
    projects: projects
  };
};

export const fetchProjectsFail = (error) => {
  return {
    type: actionTypes.FETCH_PROJECTS_FAIL,
    error: error
  };
};

export const fetchProjects = (token) => {
  return (dispatch) => {
    dispatch(fetchProjectsStart());
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios
      .get('http://localhost:3001/projects/all', config)
      .then((res) => {
        console.log(res);
        const fetchedProjects = [];
        // for (let key in res.data) {
        //   fetchedProjects.push({
        //     ...res.data[key],
        //     id: key
        //   });
        // }
        dispatch(fetchProjectsSuccess(res.data.projects));
      })
      .catch((err) => {
        dispatch(fetchProjectsFail(err));
      });
  };
};
