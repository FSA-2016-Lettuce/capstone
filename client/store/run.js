import axios from 'axios';

const initialState = {
  singleRun: {},
  allRuns: [],
};

/**
 * ACTION TYPES
 */
const GET_RUN = 'GET_RUN';
const REMOVE_RUN = 'REMOVE_RUN';
const GET_RUNS = 'GET_RUNS';
const CREATE_RUN = 'CREATE_RUN';

/**
 * ACTION CREATORS
 */
const getRun = (run) => ({ type: GET_RUN, run });

export const removeRun = () => ({ type: REMOVE_RUN, run: {} });

const getRuns = (runs) => ({ type: GET_RUNS, runs });

/**
 * THUNK CREATORS
 */
export const _getRun = (runId) => {
  return async (dispatch) => {
    try {
      const { data: run } = await axios.get(`/api/runs/${runId}`);
      dispatch(getRun(run));
    } catch (e) {
      console.log(e);
    }
  };
};

export const _getRuns = (pace, distance, runStart) => {
  return async (dispatch) => {
    try {
      const { data: runs } = await axios.get(
        `/api/runs/?pace=${pace}&distance=${distance}&runStart=${runStart}`
      );
      dispatch(getRuns(runs));
    } catch (e) {
      console.log(e);
    }
  };
};

export const _createRun = () => {
  return async (dispatch) => {
    try {
      // const { data: runs } = await axios.get(`/api/runs/`);
      // dispatch(getRuns(runs));
    } catch (e) {
      console.log(e);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RUN:
      return { ...state, singleRun: action.run };
    case REMOVE_RUN:
      return { ...state, singleRun: action.run };
    case GET_RUNS:
      return { ...state, allRuns: action.runs };
    default:
      return state;
  }
}
