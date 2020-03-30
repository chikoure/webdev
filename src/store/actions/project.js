import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addProjectsStart = () => {
  return {
    type: actionTypes.ADD_PROJECTS_START
  };
};

export const addProjectsSuccess = (response) => {
  return {
    type: actionTypes.ADD_PROJECTS_SUCCESS,
    loading: true,
    response: response
  };
};

export const addProjectsEnd = () => {
  return {
    type: actionTypes.ADD_PROJECTS_END
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
        dispatch(addProjectsSuccess(response.status));
        dispatch(addProjectsEnd());
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
        dispatch(fetchProjectsSuccess(res.data.projects));
      })
      .catch((err) => {
        dispatch(fetchProjectsFail(err));
      });
  };
};
