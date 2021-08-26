import axios from 'axios';

const initialState = {};

/**
 * ACTION TYPES
 */

// SCOTT AND JOSE COMMENTING OUT WAYPOINT STUFF FOR NOW,
// LET'S COME BACK TO IT LATER IF WE NEED TO

// const GET_WAYPOINTS = 'GET_WAYPOINTS';
const CREATE_ROUTE = 'CREATE_ROUTE';
/**
 * ACTION CREATORS
 */
// const getWaypoints = (waypoints) => ({ type: GET_WAYPOINTS, waypoints });
const createRoute = (route) => ({ type: CREATE_ROUTE, route });

/**
 * THUNK CREATORS
 */

// export const getRouteDistanceThunk = (routeId) => async (dispatch) => {
//   const { data: distance } = await axios.get(`/api/routes/${routeId}`);
//   // this function is not finished or being used right now
//   return distance;
// };

export const createRouteThunk = (routeObj) => async (dispatch) => {
  try {
    const { data: newRoute } = await axios.post(`/api/routes`, routeObj);
    dispatch(createRoute(newRoute));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    // case GET_WAYPOINTS:
    //   return action.waypoints;
    case CREATE_ROUTE:
      return action.route;
    default:
      return state;
  }
}
