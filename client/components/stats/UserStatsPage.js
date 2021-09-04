import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { updateUserThunk } from '../../store/auth';
import { _getStats } from '../../store/run';

export default function UserStats(props) {
  const userId = props.match.params.id;

  console.log('props in UserStats: ', props);
  const user = useSelector((state) => state.auth);
  console.log('what is user.id', user.id)

  const runs = useSelector((state) => state.run.allRuns);
  console.log('runs in stats:', runs);

  const dispatch = useDispatch();

  useEffect(() => {
     async function loadStats() {
      await dispatch(_getStats(userId));
    }
    loadStats();
  }, []);

  return <h1>Hello</h1>;
}
