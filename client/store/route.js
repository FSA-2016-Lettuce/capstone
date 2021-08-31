import axios from 'axios';

const initialState = {
  singleRoute: {},
  allRoutes: [],
};

/**
 * ACTION TYPES
 */

const CREATE_ROUTE = 'CREATE_ROUTE';
const GET_ROUTES = 'GET_ROUTES';

/**
 * ACTION CREATORS
 */

const createRoute = (route) => ({ type: CREATE_ROUTE, route });

const getRoutes = (routes) => ({ type: GET_ROUTES, routes });

/**
 * THUNK CREATORS
 */

export const _createRoute = (routeObj) => async (dispatch) => {
  try {
    const { data: newRoute } = await axios.post(`/api/routes`, routeObj);
    dispatch(createRoute(newRoute));
  } catch (err) {
    console.error(err);
  }
};

export const _getRoutes = (lat, lng) => {
  return async (dispatch) => {
    try {
      console.log('lat long in reducer: ', lat, lng);
      const { data: routes } = await axios.get(
        `/api/routes/?lat=${lat}&lng=${lng}`
      );
      dispatch(getRoutes(routes));
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
    case CREATE_ROUTE:
      return { ...state, singleRoute: action.route };
    case GET_ROUTES:
      return { ...state, allRoutes: action.routes };
    default:
      return state;
  }
}
