import axios from 'axios';

const initialState = {
  run: {},
};

/**
 * ACTION TYPES
 */
const GET_RUN = 'GET_RUN';

/**
 * ACTION CREATORS
 */
const getRun = (run) => ({ type: GET_RUN, run });

/**
 * THUNK CREATORS
 */
export const getRunThunk = (runId) => async (dispatch) => {
  const run = await axios.get(`/runs/${runId}`);
  return dispatch(getRun(run));
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RUN:
      return action.run;
    default:
      return state;
  }
}
