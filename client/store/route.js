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

export const getRouteDistanceThunk = (routeId) => async (dispatch) => {
  const { data: distance } = await axios.get(`/api/routes/${routeId}`);
  // this function is not finished or being used right now
  return distance;
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
