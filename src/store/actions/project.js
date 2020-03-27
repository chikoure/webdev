import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addProjectsStart = () => {
  return {
    type: actionTypes.ADD_PROJECTS_START
  };
};

export const addProjectsSuccess = () => {
  return {
    type: actionTypes.ADD_PROJECTS_SUCCESS,
    loading: true
  };
};

export const addProjectsFail = (error) => {
  return {
    type: actionTypes.ADD_PROJECTS_FAIL,
    error: error
  };
};

export const addProject = (
  token,
  title,
  estimateAmount,
  completionDeadline,
  startDate,
  dueDate,
  status,
  stacks,
  hourlyCostDay,
  client,
  githubRepoName,
  githubRepoOwner
) => {
  return (dispatch) => {
    dispatch(addProjectsStart());
    const addProjectData = {
      title: title,
      estimateAmount: estimateAmount,
      completionDeadline: completionDeadline,
      startDate: startDate,
      dueDate: dueDate,
      status: status,
      stacks: stacks,
      hourlyCostDay: hourlyCostDay,
      client: client,
      githubRepo: {
        name: githubRepoName,
        owner: githubRepoOwner
      }
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    let url = 'http://localhost:3001/projects';
    axios
      .post(url, addProjectData, config)
      .then((response) => {
        console.log(response);
        dispatch(addProjectsSuccess());
      })
      .catch((err) => {
        dispatch(addProjectsFail(err.response));
      });
  };
};

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
