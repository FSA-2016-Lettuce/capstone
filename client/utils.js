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

export const avatarList = [
  { 1: '/avatarImages/girl_blueShirt_brownHair.jpeg' },
  { 2: '/avatarImages/girl_brownShirt_redHair.jpeg' },
  { 3: '/avatarImages/girl_purpleShirt_blueHair.jpeg' },
  { 4: '/avatarImages/girl_redShirt_blonde.png' },
  { 5: '/avatarImages/girl_redShirt_brownHair.jpeg' },
  { 6: '/avatarImages/girl_redShirt_lightBrownHair.jpeg' },
  { 7: '/avatarImages/guy_burgundyShirt_brownHair.jpeg' },
  { 8: '/avatarImages/guy_greenShirt_brownHair.jpeg' },
  { 9: '/avatarImages/guy_greyShirt_brownHair.jpeg' },
  { 10: '/avatarImages/guy_yellopwShirt_brownHair.jpeg' },
  { 11: '/avatarImages/guy_yellowShirt_blackHair.jpeg' },
  { 12: '/avatarImages/guy_yellowShirt_brownHair.jpeg' },
  { 13: '/avatarImages/lady_yellowShirtVest_greyHair.jpeg' },
  { 14: '/avatarImages/oldGuy_greenShirt_greyHair.jpeg' },
  { 15: '/avatarImages/YoungGIrl_purpleShirt_blueHair.jpeg' },
  { 16: '/avatarImages/youngGuy_redShirt_brownHair.jpeg' },
];
