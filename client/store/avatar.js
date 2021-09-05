import axios from 'axios';

const initialState = {
  profileAvatar: {},
  allAvatars: [],
};

/**
 * ACTION TYPES
 */
const GET_AVATARS = 'GET_AVATARS';

/**
 * ACTION CREATORS
 */
const getAvatars = (avatars) => ({ type: GET_AVATARS, allAvatars });

/**
 * THUNK CREATORS
 */
export const _getAvatars = (avatars) => {
  return async (dispatch) => {
    try {
      const { data: avatars } = await axios.get(`/api/avatars`);
      dispatch(getAvatars(avatars));
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
    case GET_AVATARS:
      return { ...state, allAvatars: action.avatars };
    default:
      return state;
  }
}
