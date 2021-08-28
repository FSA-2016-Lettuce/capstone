import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Marker, Popup, useMap } from 'react-leaflet';
import PopupData from './PopupData';
import { _getRuns } from '../store/run';

const dummyData = [
  {
    id: 1,
    coordinates: [40.759253, -73.774953],
    name: 'First Point',
    distance: '1 mile',
    pace: '8 min/mile',
    date: '08/31/2021 @ 8:00AM',
  },
  {
    id: 2,
    coordinates: [40.779, -73.68],
    name: 'Second Point',
    distance: '2 miles',
    pace: '12 min/mile',
    date: '08/31/2021 @ 10:00AM',
  },
  {
    id: 3,
    coordinates: [40.76, -73.6],
    name: 'Third Point',
    distance: '10 miles',
    pace: '6 min/mile',
    date: '08/31/2021 @ 8:00PM',
  },
];

const HomeMapRunView = (props) => {
  console.log('HomeMapRunView props: ', props);
  const dispatch = useDispatch();
  const runs = useSelector((state) => state.run);
  console.log("runs y'all", runs);
  useEffect(() => {
    async function loadRuns() {
      await dispatch(_getRuns());
    }
    if (runs.length === 1) loadRuns();
  }),
    [];
  return (
    <div>
      {runs[0].id &&
        runs.map((run) => (
          <Marker
            key={run.id}
            position={[
              run.route.waypoints[0].latitude,
              run.route.waypoints[0].longitude,
            ]}
          >
            {/* going to add styling to our popup shortly */}
            <Popup>
              <PopupData run={run} />
            </Popup>
          </Marker>
        ))}
    </div>
  );
};

export default HomeMapRunView;
