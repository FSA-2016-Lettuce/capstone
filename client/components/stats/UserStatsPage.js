import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { updateUserThunk } from '../../store/auth';
import { _getStats } from '../../store/run';

export default function UserStats(props) {
  const userId = props.match.params.id;
  const user = useSelector((state) => state.auth);
  console.log('what is user.id', user.id);

  const runs = useSelector((state) => state.run.allRuns);
  console.log('runs in stats:', runs);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStats() {
      await dispatch(_getStats(userId));
    }
    loadStats();
    console.log(runs);
  }, []);

  return (
    <div>
      {runs[0] && (
        <div>
          <h1>{runs[0].id}</h1>
          <h1>{runs[0].startDate}</h1>
          <h1>{runs[0].pace}</h1>
          <h1>{runs[0].status}</h1>
        </div>
      )}
    </div>
  );
}
