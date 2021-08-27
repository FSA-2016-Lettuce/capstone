export const displayKm = (meterDistance) => {
  return (meterDistance / 1000).toFixed(2);
};

export const displayPace = (seconds) => {
  return (seconds / 60).toFixed(2);
};
