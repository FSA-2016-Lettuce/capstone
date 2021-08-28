import axios from 'axios';

const initialState = [{ route: { distance: 0 }, users: [] }];

/**
 * ACTION TYPES
 */
const GET_RUN = 'GET_RUN';
const GET_RUNS = 'GET_RUNS';

/**
 * ACTION CREATORS
 */
const getRun = (run) => ({ type: GET_RUN, run });

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

export const _getRuns = () => {
  return async (dispatch) => {
    try {
      const { data: runs } = await axios.get(`/api/runs/`);
      dispatch(getRuns(runs));
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
      return [action.run];
    case GET_RUNS:
      return [...action.runs];
    default:
      return state;
  }
}
