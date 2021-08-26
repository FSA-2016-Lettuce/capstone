const moment = require('moment');

const users = [
  {
    username: 'cody@gmail.com',
    firstName: 'Cody',
    lastName: 'Coder',
    password: 'cody123',
    pace: 390,
    runningStyle: 'HOBBY',
    homeLat: 48.85837,
    homeLng: 2.294481,
  },
  {
    username: 'sarah@gmail.com',
    password: 'sarah123',
    firstName: 'Sarah',
    lastName: 'Z',
    pace: 440,
    runningStyle: 'HOBBY',
    homeLat: 3.2028,
    homeLng: 73.2207,
  },
  {
    username: 'nicole@gmail.com',
    password: 'nicole123',
    firstName: 'Nicole',
    lastName: 'Y',
    pace: 320,
    runningStyle: 'HOBBY',
    homeLat: -16.5004,
    homeLng: -151.7415,
  },
  {
    username: 'matt@gmail.com',
    password: 'matt123',
    firstName: 'Matt',
    lastName: 'G',
    pace: 380,
    runningStyle: 'HOBBY',
    homeLat: -82.8628,
    homeLng: 135.0,
  },
  {
    username: 'gary@gmail.com',
    password: 'gary123',
    firstName: 'Gary',
    lastName: 'K',
    pace: 290,
    runningStyle: 'HOBBY',
    homeLat: 13.736717,
    homeLng: 100.523186,
  },
  {
    username: 'meredith@gmail.com',
    password: 'meredith123',
    firstName: 'Meredith',
    lastName: 'C',
    pace: 510,
    runningStyle: 'HOBBY',
    homeLat: 49.2827,
    homeLng: -123.1207,
  },
];

const futureDate = moment().add(3, 'days');
const pastDate = moment().subtract(3, 'days');
const now = moment();

const runs = [
  {
    startDate: futureDate,
    pace: 480,
    route: {},
  },
  {
    startDate: futureDate,
    pace: 390,
    route: {},
  },
  {
    startDate: pastDate,
    pace: 560,
    route: {},
  },
  {
    startDate: pastDate,
    pace: 780,
    route: {},
  },
  {
    startDate: now,
    pace: 660,
    route: {},
  },
  {
    startDate: now,
    pace: 520,
    route: {},
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
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
}));

module.exports = {
  runs,
  users,
  waypoints,
};
