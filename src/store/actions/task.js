import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchTasksStart = () => {
  return {
    type: actionTypes.FETCH_TASKS_START
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks
  };
};

export const fetchTasksFail = (error) => {
  return {
    type: actionTypes.FETCH_TASKS_FAIL,
    error: error
  };
};

export const fetchTasks = (token, projectId, sprintId) => {
  return (dispatch) => {
    dispatch(fetchTasksStart());

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios
      .get(`http://localhost:3001/tasks/${projectId}/${sprintId}/all`, config)
      .then((res) => {
        console.log(res);
        dispatch(fetchTasksSuccess(res.data.tasks));
      })
      .catch((err) => {
        dispatch(fetchTasksFail(err));
      });
  };
};

export const addTasksStart = () => {
  return {
    type: actionTypes.ADD_TASKS_START
  };
};

export const addTasksSuccess = () => {
  return {
    type: actionTypes.ADD_TASKS_SUCCESS
  };
};

export const addTasksFail = (error) => {
  return {
    type: actionTypes.ADD_TASKS_FAIL,
    error: error
  };
};

export const addTasks = (
  token,
  projectId,
  sprintId,
  title,
  description,
  status,
  realisationTime
) => {
  return (dispatch) => {
    dispatch(addTasksStart());
    const addTasksData = {
      title: title,
      description: description,
      status: status,
      realisationTime: realisationTime
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    let url = `http://localhost:3001/tasks/${projectId}/${sprintId}`;
    axios
      .post(url, addTasksData, config)
      .then((response) => {
        console.log(response);
        dispatch(addTasksSuccess());
      })
      .catch((err) => {
        dispatch(addTasksFail(err.response));
      });
  };
};
