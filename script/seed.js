'use strict';

const {
  db,
  models: { User, Run, Waypoint, Route },
} = require('../server/db');
const {
  users,
  runs,
  routes,
  routeOneWaypoints,
  routeTwoWaypoints,
  routeThreeWaypoints,
  routeFourWaypoints,
  routeFiveWaypoints,
  routeSixWaypoints,
  routeSevenWaypoints,
  routeEightWaypoints,
  routeNineWaypoints,
  routeTenWaypoints,
  routeElevenWaypoints,
} = require('./seedData');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  for (let i = 0; i < users.length; i++) {
    await User.create(users[i]);
  }

  // Creating Routes
  for (let i = 0; i < routes.length; i++) {
    await Route.create(routes[i]);
  }

  // Create Runs
  for (let i = 0; i < runs.length; i++) {
    await Run.create(runs[i]);
  }

  // Associate Routes to Runs
  const allRoutes = await Route.findAll();
  const allRuns = await Run.findAll();
  await Promise.all(allRuns.map((run, idx) => run.setRoute(allRoutes[idx])));

  // Creating Waypoints with Route associations
  await Promise.all(
    routeOneWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeTwoWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeThreeWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeFourWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeFiveWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeSixWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeSevenWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeEightWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeNineWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeTenWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );
  await Promise.all(
    routeElevenWaypoints.map((waypoint) => Waypoint.create(waypoint))
  );

  // Trigger Route beforeUpdate hook to calculate route distances
  await allRoutes.forEach((route) => route.update({}));

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
