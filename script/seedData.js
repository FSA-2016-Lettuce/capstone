const moment = require('moment');

const users = [
  {
    username: 'cody@gmail.com',
    password: 'cody123',
    pace: 390,
    runningStyle: 'HOBBY',
  },
  {
    username: 'sarah@gmail.com',
    password: 'sarah123',
    pace: 440,
    runningStyle: 'HOBBY',
  },
  {
    username: 'nicole@gmail.com',
    password: 'nicole123',
    pace: 500,
    runningStyle: 'HOBBY',
  },
  {
    username: 'matt@gmail.com',
    password: 'matt123',
    pace: 560,
    runningStyle: 'HOBBY',
  },
  {
    username: 'gary@gmail.com',
    password: 'gary123',
    pace: 600,
    runningStyle: 'HOBBY',
  },
  {
    username: 'meredith@gmail.com',
    password: 'meredith123',
    pace: 680,
    runningStyle: 'HOBBY',
  },
];

const futureDate = moment().add(3, 'days');
const pastDate = moment().subtract(3, 'days');
const now = moment();

const runs = [
  {
    startDate: futureDate,
    pace: 480,
  },
  {
    startDate: futureDate,
    pace: 390,
  },
  {
    startDate: pastDate,
    pace: 560,
  },
  {
    startDate: pastDate,
    pace: 780,
  },
  {
    startDate: now,
    pace: 660,
  },
  {
    startDate: now,
    pace: 520,
  },
];

const waypointCoords = [
  [40.759253, -73.774953],
  [40.76006, -73.775218],
  [40.76147, -73.769917],
  [40.76897, -73.77377],
  [40.769715, -73.770168],
  [40.769894, -73.7702],
  [40.770144, -73.7693],
  [40.77027, -73.7686],
  [40.770356, -73.768239],
  [40.770602, -73.768027],
  [40.770823, -73.767928],
  [40.770983, -73.76762],
  [40.771018, -73.766655],
  [40.771454, -73.766332],
  [40.771796, -73.766354],
  [40.772013, -73.766907],
  [40.771954, -73.767954],
  [40.77152, -73.769428],
  [40.77087, -73.770246],
  [40.770289, -73.77063],
  [40.770283, -73.770803],
  [40.769648, -73.770643],
  [40.767974, -73.77836],
  [40.760309, -73.774321],
  [40.760077, -73.775225],
  [40.759253, -73.774953],
];

const waypoints = waypointCoords.map((coord, index) => ({
  pathIndex: index,
  latitude: coord[0],
  longitude: coord[1],
}));

module.exports = {
  runs,
  users,
  waypoints,
};
