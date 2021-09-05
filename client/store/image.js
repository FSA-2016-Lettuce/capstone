import axios from 'axios';
import history from '../history';

const initialState = {
  profileImage: [],
};

/**
 * ACTION TYPES
 */
const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE';
const GET_PROFILE_IMAGE = 'GET_PROFILE_IMAGE';

/**
 * ACTION CREATORS
 */
const setProfileImage = (image) => ({
  type: SET_PROFILE_IMAGE,
  image,
});

const getProfileImage = (image) => ({
  type: GET_PROFILE_IMAGE,
  image
})

/**
 * THUNK CREATORS
 */
export const _setProfileImage = (userId) => {
  return async (dispatch) => {
    try {
      const { data: image} = await axios.post(`/api/users/${userId}/profileImage`);
      dispatch(setProfileImage(image));
    }
    catch(e) {
      console.log(e);
    }
  }
}

export const _getProfileImage = (userId) => {
  return async (dispatch) => {
    try {
      const {data: image} = await axios.get(`api/users/${userId}/profileImage`);
      dispatch(getProfileImage(image));
    }
    catch(e) {
      console.log(e)
    }
  }
}


/**
 * REDUCER
 */
 export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_IMAGE:
      return {...state, profileImage: action.image};
      case GET_PROFILE_IMAGE:
        return {...state, profileImage: action.image}
    default:
      return state;
  }
}
