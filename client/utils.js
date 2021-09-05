import moment from 'moment';

export const displayMiles = (feetDistance) => {
  return (feetDistance / 5280).toFixed(2);
};

export const displayPace = (seconds) => {
  return (seconds / 60).toFixed(2);
};

export const distanceConverter = (dis, label) => {
  if (label === 'mi') {
    return dis * 5280;
  } else if (label === 'ft') {
    return (dis / 5280).toFixed(2);
  }
};

export const timeConverter = (seconds) => {
  return (seconds / 60).toFixed(2);
};

export const getCoords = async (address) => {
  const formattedAddress = address.split(' ').join('+');

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyAz-9KJeJV25jg2jZVZZ9GHcJC_aI9hwME`
  );
  let coord = await res.json();
  console.log('what is coord from utils', coord);
  return coord.results.length
    ? [
        coord.results[0].geometry.location.lat,
        coord.results[0].geometry.location.lng,
      ]
    : 'error';
};

export const getPaceList = () => {
  let minPace = moment('2021-09-10 05:04:00');
  let paceList = Array(21).fill('');
  const paceStep = 30;
  paceList = paceList.map((pace, index) => {
    const paceJump = paceStep * index;
    return moment(minPace).add(paceJump, 'seconds').format('m:ss');
  });
  return paceList;
};

