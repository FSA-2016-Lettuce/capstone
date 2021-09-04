import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { updateUserThunk } from '../../store/auth';
import { _getRuns } from '../../store/run';

export default function UserStats(props) {
  const user = useSelector((state) => state.auth);
  console.log('user from stats: ', user);
  const dispatch = useDispatch();
  return <h1>Hello</h1>;
}
