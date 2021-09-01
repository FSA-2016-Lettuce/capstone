import axios from 'axios';
import history from '../history';

const initialState = {
  homeLat: 0,
  homeLng: 0,
};

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';
const UPDATE_USER = 'UPDATE_USER';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        username,
        password,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
      history.push(`/`);
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const authenticateSignUp =
  (username, password, method, firstName, lastName) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        username,
        password,
        firstName,
        lastName,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      await dispatch(me());
      history.push('/users/signupWaiting');
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const updateUserThunk = (user) => {
  console.log('updateUsertThunk param user: ', user);
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put(
        `/api/users/${user.id}`,
        user
      );
      dispatch(updateUser(updatedUser));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: initialState,
  };
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case UPDATE_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
}
