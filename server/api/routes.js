const router = require('express').Router();
const {
  models: { Route, Waypoint },
} = require('../db');
module.exports = router;

// this route is not being used. needs to be updated when used
router.get('/:id', async (req, res, next) => {
  try {
    res.json('hello');
  } catch (err) {
    next(err);
  }
});

// POST Route for creating a route
router.post('/', async (req, res, next) => {
  try {
    // Extract name and waypoints from req body
    const { name, waypoints } = req.body;
    // Waypoints array for creating waypoints in DB
    const waypointsArr = waypoints.map((coords, idx) => {
      return { pathIndex: idx + 1, latitude: coords[0], longitude: coords[1] };
    });

    // Create each waypoint in the DB
    // First, make an array to hold all waypoint instances in the DB
    const waypointsForRoute = [];
    // Loop over the waypointArr to create each waypoint instance,
    // then push that instance to the waypointsForRoute array
    // (to be used later upon Route creation)
    for (let i = 0; i < waypointsArr.length; i++) {
      const currWaypoint = await Waypoint.create(waypointsArr[i]);
      waypointsForRoute.push(currWaypoint);
    }

    // Create the new route, with just the name info for now
    const newRoute = await Route.create({ name });
    // Magic method to assign waypoints to the route
    await newRoute.setWaypoints(waypointsForRoute);
    // Run update with empty object to run Sequelize hook to calculate route distance
    await newRoute.update({});
    res.status(201).json(newRoute);
  } catch (err) {
    next(err);
  }
});
