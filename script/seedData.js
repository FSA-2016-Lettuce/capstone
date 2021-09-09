const moment = require('moment');

const avatarList = [
  {src: '/avatarImages/picA.jpg'},
  {src: '/avatarImages/picB.jpg'},
  {src: '/avatarImages/picC.jpg'},
  {src: '/avatarImages/picD.jpg'},
  {src: '/avatarImages/picE.jpg'},
  {src: '/avatarImages/picF.jpg'},
  {src: '/avatarImages/picG.jpg'},
  {src: '/avatarImages/picH.jpg'},
  { src: '/cody.png'},
  {src: '/avatarImages/picAnimalA.jpg'},
  {src: '/avatarImages/picAnimalB.jpg'},
  {src: '/avatarImages/picAnimalC.jpg'},
  {src: '/avatarImages/picAnimalD.jpg'},
  {src: '/avatarImages/picAnimalE.jpg'},
  {src: '/avatarImages/picAnimalF.jpg'},
  {src: '/avatarImages/picAnimalG.jpg'},
  {src: '/avatarImages/picAnimalH.jpg'},
  {src: '/avatarImages/picAnimalI.jpg'},
  {src: '/avatarImages/picAnimalJ.jpg'},
  {src: '/avatarImages/picAnimalK.jpg'},
  {src: '/avatarImages/picAnimalL.jpg'},
];

const users = [
  {
    username: 'cody@gmail.com',
    firstName: 'Cody',
    lastName: 'Coder',
    password: 'cody123',
    pace: 540,
    distance: 10560,
    runningStyle: 'HOBBY',
    homeLat: 40.718609,
    homeLng: -74.002521,
    profileImg: '/cody.png',
  },
  {
    username: 'sarah@gmail.com',
    password: 'sarah123',
    firstName: 'Sarah',
    lastName: 'Z',
    pace: 420,
    distance: 15840,
    runningStyle: 'HOBBY',
    homeLat: 59.9375,
    homeLng: 30.308611,
  },
  {
    username: 'nicole@gmail.com',
    password: 'nicole123',
    firstName: 'Nicole',
    lastName: 'Y',
    pace: 540,
    distance: 31680,
    runningStyle: 'HOBBY',
    homeLat: -16.5004,
    homeLng: -151.7415,
  },
  {
    username: 'matt@gmail.com',
    password: 'matt123',
    firstName: 'Matt',
    lastName: 'G',
    pace: 480,
    distance: 15840,
    runningStyle: 'HOBBY',
    homeLat: 51.517677,
    homeLng: -0.120395,
  },
  {
    username: 'gary@gmail.com',
    password: 'gary123',
    firstName: 'Gary',
    lastName: 'K',
    pace: 450,
    distance: 52800,
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
    distance: 21120,
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
    pace: 300,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: pastDate,
    pace: 510,
  },
  {
    startDate: pastDate,
    pace: 450,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: now,
    pace: 540,
  },
  {
    startDate: futureDate,
    pace: 540,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: futureDate,
    pace: 450,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: pastDate,
    pace: 420,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: futureDate,
    pace: 660,
  },
  {
    startDate: pastDate,
    pace: 450,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: now,
    pace: 540,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: futureDate,
    pace: 360,
  },
  {
    startDate: futureDate,
    pace: 540,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: pastDate,
    pace: 600,
  },
];

const routes = [
  { name: 'Crocheron Park Run' },
  { name: 'English Bay Scramble' },
  { name: 'Stanley Park Stroll' },
  { name: 'Chinatown Jaunt' },
  { name: 'Yaletown Docks' },
  { name: 'Burrard Street Bridge' },
  { name: 'Stroll Like A Queen' },
  { name: "St. Paul's" },
  { name: "Regent's Park" },
  { name: 'Tower & Millenium Bridges' },
  { name: 'Whitechapel Haunt' },
  { name: 'Post Code Jog' },
  { name: 'Brooklyn & Manhattan Bridges' },
  { name: 'West Street Straight' },
  { name: 'Houston Street Hustle' },
  { name: 'Marin Mile' },
  { name: 'Pathfinder' },
  { name: 'Washington Square' },
  { name: 'Brooklyn 10 Miler' },
  { name: 'East Side Zigzag' },
  { name: 'DUMBO Loop' },
];

const messages = [
  { content: 'Hello everyone!' },
  { content: 'Looking forward to the run!' },
];

module.exports = {
  avatarList,
  runs,
  users,
  routes,
  messages,
};
