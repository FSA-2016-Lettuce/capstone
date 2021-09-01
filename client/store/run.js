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
const JOIN_RUN = 'JOIN_RUN';
const LEAVE_RUN = 'LEAVE_RUN';

/**
 * ACTION CREATORS
 */
const getRun = (run) => ({ type: GET_RUN, run });

export const removeRun = () => ({ type: REMOVE_RUN, run: {} });

const getRuns = (runs) => ({ type: GET_RUNS, runs });

const joinRun = (run) => ({ type: JOIN_RUN, run });

const leaveRun = (run) => ({ type: LEAVE_RUN, run });

const createRun = (run) => ({ type: CREATE_RUN, run });

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

export const _createRun = (run) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const { data: newRun } = await axios.post('/api/runs/', run, {
        headers: {
          authorization: token,
        },
      });
      console.log('new run created: ', newRun);
      dispatch(createRun(newRun));
    } catch (e) {
      console.log(e);
    }
  };
};

export const _joinRun = (userId, runId) => {
  return async (dispatch) => {
    try {
      const { data: run } = await axios.put(`/api/runs/${runId}`, {
        userId: userId,
        action: 'join',
      });
      dispatch(joinRun(run));
    } catch (e) {
      console.log(e);
    }
  };
};

export const _leaveRun = (userId, runId) => {
  return async (dispatch) => {
    try {
      const { data: run } = await axios.put(`/api/runs/${runId}`, {
        userId: userId,
        action: 'leave',
      });
      dispatch(leaveRun(run));
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
    case JOIN_RUN:
      return { ...state, singleRun: action.run };
    case LEAVE_RUN:
      return { ...state, singleRun: action.run };
    case CREATE_RUN:
      return { ...state, allRuns: [] };
    default:
      return state;
  }
}
