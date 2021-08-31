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

export const getCoords = async (address) => {
  const formattedAddress = address.split(' ').join('+');

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyAz-9KJeJV25jg2jZVZZ9GHcJC_aI9hwME`
  );
  let coord = await res.json();
  return [
    coord.results[0].geometry.location.lat,
    coord.results[0].geometry.location.lng,
  ];
};

// const getStaticCoordinate = async () => {
//   const address = formState.address.split(' ').join('+');
//   console.log('USERPROFILEFORM ADDRESS >>>', address);

//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAz-9KJeJV25jg2jZVZZ9GHcJC_aI9hwME`
//   );
//   let coord = await res.json();
//   console.log(
//     'USERPROFILEFORM COORD Lat >>>',
//     coord.results[0].geometry.location.lat
//   );
//   console.log(
//     'USERPROFILEFORM COORD Lng >>>',
//     coord.results[0].geometry.location.lng
//   );
//   setFormState({
//     ...formState,
//     homeLat: coord.results[0].geometry.location.lat,
//   });
//   setFormState({
//     ...formState,
//     homeLng: coord.results[0].geometry.location.lng,
//   });
//   console.log('FormState in the end', formState);
// };
