import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  tasks: [],
  loading: false,
  response: false
};

const addTasksStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const addTasksSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    response: action.response
  });
};

const addTasksEnd = (state, action) => {
  return updateObject(state, {
    response: false
  });
};

const addTasksFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const fetchTasksStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchTasksSuccess = (state, action) => {
  return updateObject(state, {
    tasks: action.tasks,
    loading: false
  });
};

const fetchTasksFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASKS_START:
      return addTasksStart(state, action);
    case actionTypes.ADD_TASKS_SUCCESS:
      return addTasksSuccess(state, action);
    case actionTypes.ADD_TASKS_END:
      return addTasksEnd(state, action);
    case actionTypes.ADD_TASKS_FAIL:
      return addTasksFail(state, action);
    case actionTypes.FETCH_TASKS_START:
      return fetchTasksStart(state, action);
    case actionTypes.FETCH_TASKS_SUCCESS:
      return fetchTasksSuccess(state, action);
    case actionTypes.FETCH_TASKS_FAIL:
      return fetchTasksFail(state, action);
    default:
      return state;
  }
};

export default reducer;
