const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
const moment = require('moment');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const run = await Run.findByPk(req.params.id, {
      include: [
        {
          model: Route,
          include: [Waypoint],
        },
        { model: User },
      ],
      order: [[Route, Waypoint, 'pathIndex', 'ASC']],
    });
    res.json(run);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    console.log('ARE WE GETTING REQ.QUERY?', req.query);
    let { pace, distance, runStart } = req.query;

    // console.log('MESSING WITH MOMENT:', moment(runStart).add(10, 'hours'));
    // console.log('MESSING WITH MOMENT:', moment(runStart).subtract(1, 'hours'));

    if (pace !== '0') {
      pace = Number(pace);
    }
    if (distance !== '0') {
      distance = Number(distance);
    }

    const whereClauseRun = {};
    const whereClauseRoute = {};

    if (pace > 0 && pace < 1000) {
      whereClauseRun.pace = {
        [Op.between]: [pace - 61, pace + 61],
      };

      // whereClauseRun[Op.and] = [
      //   {
      //     pace: {
      //       [Op.between]: [pace - 61, pace + 61],
      //     },
      //   },
      // ];
    }

    if (pace === 10000) {
      whereClauseRun.pace = {
        [Op.gte]: 12 * 60,
      };
      // whereClauseRun[Op.and] = [
      //   {
      //     pace: {
      //       [Op.gte]: 12 * 60,
      //     },
      //   },
      // ];
    }

    whereClauseRun.startDate = {
      [Op.between]: [
        moment(runStart).subtract(1, 'hours'),
        moment(runStart).add(1, 'hours'),
      ],
    };

    // whereClauseRun[Op.and] = [
    //   {
    //     startDate: {
    //       [Op.between]: [
    //         moment(runStart).subtract(1, 'hours'),
    //         moment(runStart).add(1, 'hours'),
    //       ],
    //     },
    //   },
    // ];

    if (distance > 0 && distance < 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.between]: [distance - 5281, distance + 5281],
      };
    }

    if (distance === 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.gte]: 12 * 5280,
      };
    }

    const runs = await Run.findAll({
      where: whereClauseRun,
      include: [
        {
          model: Route,
          where: whereClauseRoute,
          include: [Waypoint],
        },
        { model: User },
      ],
      order: [[Route, Waypoint, 'pathIndex', 'ASC']],
    });
    // console.log('runs from server:', runs);
    res.json(runs);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    // grab user home location from query parameters
    const homeLat = req.query.lat;
    const homeLng = req.query.lng;
    // get all routes from database
    const routes = await Route.findAll({
      include: [Waypoint],
      order: [[Waypoint, 'pathIndex', 'ASC']],
    });
    // filter routes to only those with starting point within 5 miles of user home location
    const localRoutes = routes.filter((route) => {
      const distanceFromHome = pointToPointDistance(
        [homeLat, homeLng],
        [route.waypoints[0].latitude, route.waypoints[0].longitude]
      );
      return distanceFromHome <= 26400;
    });
    res.json(localRoutes);
  } catch (err) {
    next(err);
  }
});
