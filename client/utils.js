export const displayMiles = (feetDistance) => {
  return (feetDistance / 5280).toFixed(2);
};

export const displayPace = (seconds) => {
  return (seconds / 60).toFixed(2);
};
