const moment = require('moment');

const users = [
  {
    username: 'cody@gmail.com',
    password: 'cody123',
    paceMinutes: 8,
    paceSeconds: 30,
    runningStyle: 'HOBBY',
  },
  {
    username: 'sarah@gmail.com',
    password: 'sarah123',
    paceMinutes: 7,
    paceSeconds: 45,
    runningStyle: 'HOBBY',
  },
  {
    username: 'nicole@gmail.com',
    password: 'nicole123',
    paceMinutes: 8,
    paceSeconds: 0,
    runningStyle: 'HOBBY',
  },
  {
    username: 'matt@gmail.com',
    password: 'matt123',
    paceMinutes: 9,
    paceSeconds: 30,
    runningStyle: 'HOBBY',
  },
  {
    username: 'gary@gmail.com',
    password: 'gary123',
    paceMinutes: 10,
    paceSeconds: 30,
    runningStyle: 'HOBBY',
  },
  {
    username: 'meredith@gmail.com',
    password: 'meredith123',
    paceMinutes: 6,
    paceSeconds: 15,
    runningStyle: 'HOBBY',
  },
];

const futureDate = moment().add(3, 'days');
const pastDate = moment().subtract(3, 'days');
const now = moment();

const runs = [
  {
    startDate: futureDate,
    paceMinutes: 8,
    paceSeconds: 30,
  },
  {
    startDate: futureDate,
    paceMinutes: 6,
    paceSeconds: 30,
  },
  {
    startDate: pastDate,
    paceMinutes: 10,
    paceSeconds: 30,
  },
  {
    startDate: pastDate,
    paceMinutes: 9,
    paceSeconds: 15,
  },
  {
    startDate: now,
    paceMinutes: 7,
    paceSeconds: 45,
  },
  {
    startDate: now,
    paceMinutes: 12,
    paceSeconds: 0,
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
