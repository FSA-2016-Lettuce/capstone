import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import PopupData from './PopupData';

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
  const { user } = props;
  const map = useMap();

  // useEffect(() => {
  //   console.log('useffect fired inside homeMapRunView');
  //   if (map && user.homeLat !== 0)
  //     map.setView([user.homeLat, user.homeLng], 13.5);
  // }, [props.user]);

  return (
    <div>
      {dummyData.map((point) => (
        <Marker key={point.id} position={point.coordinates}>
          {/* going to add styling to our popup shortly */}
          <Popup>
            <PopupData data={point} />
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default HomeMapRunView;
