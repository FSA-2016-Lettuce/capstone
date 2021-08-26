'use strict';

const {
  db,
  models: { User, Run, Waypoint, Route },
} = require('../server/db');
const { users, runs, waypoints, homeLocations } = require('./seedData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  await Promise.all(users.map((user) => User.create(user)));

  //creating home locations and associating to users
  await Promise.all(
    homeLocations.map((homeLocation) => Waypoint.create(homeLocation))
  );

  const allUsers = await User.findAll();
  allUsers.map(async (user) => {
    const homeLocation = await Waypoint.findByPk(user.id);
    await user.setWaypoint(homeLocation);
  });

  // Creating Waypoints
  await Promise.all(waypoints.map((waypoint) => Waypoint.create(waypoint)));

  // Create Runs and include creation of / association to an empty Route
  await Promise.all(runs.map((run) => Run.create(run, { include: [Route] })));

  // Find Route id 1 and use magic method to set its waypoints
  const allWaypoints = await Waypoint.findAll();
  const routeOne = await Route.findByPk(1);
  await routeOne.setWaypoints(allWaypoints);
  // Trigger Route beforeUpdate hook to calculate route distance
  await routeOne.update({});

  // Associate some Runs with some Users
  const runOne = await Run.findByPk(1);
  const runTwo = await Run.findByPk(2);
  await runOne.addUser(1);
  await runOne.addUser(2);
  await runTwo.addUser(4);
  await runTwo.addUser(5);
  await runTwo.addUser(6);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
