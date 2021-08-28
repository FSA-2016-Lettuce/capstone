import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Marker, Popup, useMap } from 'react-leaflet';
import PopupData from './PopupData';
import { _getRuns } from '../store/run';

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
