import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  projects: [],
  projectId: null,
  loading: false
};

const addProjectsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const addProjectsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const addProjectsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const fetchProjectsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProjectsSuccess = (state, action) => {
  return updateObject(state, {
    projectId: action.projectd,
    projects: action.projects,
    loading: false
  });
};

const fetchProjectsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECTS_START:
      return addProjectsStart(state, action);
    case actionTypes.ADD_PROJECTS_SUCCESS:
      return addProjectsSuccess(state, action);
    case actionTypes.ADD_PROJECTS_FAIL:
      return addProjectsFail(state, action);
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action);
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action);
    case actionTypes.FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
