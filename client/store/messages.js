import axios from 'axios';
import socket from '../socket';

const TOKEN = 'token';

// Initial State
const initialState = [];

// Action types
const GET_MESSAGES = 'GET_MESSAGES';
const POST_MESSAGE = 'POST_MESSAGE';
const REMOVE_MESSAGES = 'REMOVE_MESSAGES';

// Action Creators
export const getMessages = (messages) => ({
  type: GET_MESSAGES,
  messages,
});

export const postMessage = (message) => ({
  type: POST_MESSAGE,
  message,
});

export const removeMessages = () => ({
  type: REMOVE_MESSAGES,
  messages: [],
});

// Thunks
export const _getMessages = (runId) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data: messages } = await axios.get(`/api/messages/${runId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getMessages(messages));
    } catch (err) {
      console.error(err);
    }
  };
};

export const _postMessage = (content) => {
  return async (dispatch, getState) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      // Using getState() parameter to grab the user&run off the current state when
      // we are executing this thunk
      const messageInfo = {
        content,
        user: getState().auth,
        run: getState().run.singleRun,
      };

      const { data: newMessage } = await axios.post(
        `/api/messages/${messageInfo.run.id}`,
        messageInfo,
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch(postMessage(newMessage));
      // After posting message, emit event back to the server with the new message
      // as the payload
      socket.emit('new-message', newMessage);
    } catch (err) {
      console.error(err);
    }
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case POST_MESSAGE:
      return [...state, action.message];
    case REMOVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default reducer;
