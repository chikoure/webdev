import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  sprints: [],
  loading: false
};

const addSprintsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const addSprintsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const addSprintsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const fetchSprintsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchSprintsSuccess = (state, action) => {
  return updateObject(state, {
    sprints: action.sprints,
    loading: false
  });
};

const fetchSprintsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SPRINTS_START:
      return addSprintsStart(state, action);
    case actionTypes.ADD_SPRINTS_SUCCESS:
      return addSprintsSuccess(state, action);
    case actionTypes.ADD_SPRINTS_FAIL:
      return addSprintsFail(state, action);
    case actionTypes.FETCH_SPRINTS_START:
      return fetchSprintsStart(state, action);
    case actionTypes.FETCH_SPRINTS_SUCCESS:
      return fetchSprintsSuccess(state, action);
    case actionTypes.FETCH_SPRINTS_FAIL:
      return fetchSprintsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
