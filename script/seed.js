'use strict';

const {
  db,
  models: { User, Run, Waypoint, Route },
} = require('../server/db');
const { users, runs, waypoints } = require('./seedData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  await Promise.all(users.map((user) => User.create(user)));

  // Creating Waypoints
  await Promise.all(waypoints.map((waypoint) => Waypoint.create(waypoint)));

  // Create a route and use magic method to set its waypoints
  const allWaypoints = await Waypoint.findAll();
  const newRoute = await Route.create();
  await newRoute.setWaypoints(allWaypoints);
  newRoute.getDistance();

  // Create Runs
  await Promise.all(runs.map((run) => Run.create(run)));

  // Associate Run 1 with Route 1
  const runOne = await Run.findByPk(1);
  await runOne.setRoute(newRoute);

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
