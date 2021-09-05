import { io } from 'socket.io-client';
import store from './store';
import { postMessage } from './store/messages';

const socket = io();

socket.on('connect', () => {
  console.log('I am now connected to the server!');
});

socket.on('new-message', (message) => {
  store.dispatch(postMessage(message));
});

export default socket;
