import axios from 'axios';

const initialState = {};

/**
 * ACTION TYPES
 */

const CREATE_ROUTE = 'CREATE_ROUTE';

/**
 * ACTION CREATORS
 */

const createRoute = (route) => ({ type: CREATE_ROUTE, route });

/**
 * THUNK CREATORS
 */

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
    case CREATE_ROUTE:
      return action.route;
    default:
      return state;
  }
}
