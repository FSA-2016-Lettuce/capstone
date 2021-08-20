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

const routes = [
  {
    startLongitude: 14.5,
    startLatitude: -54.178,
    endLongitude: 18.2332,
    endLatitude: -55.034,
  },
];

module.exports = {
  runs,
  users,
  routes,
};
