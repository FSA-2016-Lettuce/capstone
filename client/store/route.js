import axios from 'axios';

const initialState = {
  routeWaypoints: [],
};

/**
 * ACTION TYPES
 */
const GET_WAYPOINTS = 'GET_WAYPOINTS';

/**
 * ACTION CREATORS
 */
const getWaypoints = (waypoints) => ({ type: GET_WAYPOINTS, waypoints });

/**
 * THUNK CREATORS
 */
export const getWaypointsThunk = (routeId) => async (dispatch) => {
  const waypoints = await axios.get(`/routes/${routeId}`);
  return dispatch(getWaypoints(waypoints));
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WAYPOINTS:
      return action.waypoints;
    default:
      return state;
  }
}
