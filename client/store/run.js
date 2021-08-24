import { NextWeek } from '@material-ui/icons';
import axios from 'axios';

const initialState = { route: { distance: 0 }, users: [] };

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
export const getRunThunk = (runId) => {
  return async (dispatch) => {
    try {
      const { data: run } = await axios.get(`/api/runs/${runId}`);
      dispatch(getRun(run));
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
      return action.run;
    default:
      return state;
  }
}
