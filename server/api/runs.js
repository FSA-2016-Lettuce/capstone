const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
const moment = require('moment');
const { requireToken } = require('./utils');
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

// Filtered GET all runs
router.get('/', async (req, res, next) => {
  try {
    let { pace, distance, runStart } = req.query;

    // Convert pace and distance to numbers
    pace = Number(pace);
    distance = Number(distance);

    // Create containers for Run and Route where clauses inside of Run.findAll
    const whereClauseRun = {};
    const whereClauseRoute = {};

    // Set up where clauses
    if (pace > 0 && pace < 1000) {
      whereClauseRun.pace = {
        [Op.between]: [pace - 60, pace + 60],
      };
    }

    if (pace === 10000) {
      whereClauseRun.pace = {
        [Op.gte]: 12 * 60,
      };
    }

    whereClauseRun.startDate = {
      [Op.between]: [
        moment(runStart).subtract(1, 'hours'),
        moment(runStart).add(1, 'hours'),
      ],
    };

    if (distance > 0 && distance < 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.between]: [distance - 5280, distance + 5280],
      };
    }

    if (distance === 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.gte]: 12 * 5280,
      };
    }

    // Find all runs with associated filters
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
    res.json(runs);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    console.log('req.body on create run: ', req.body);
    const newRun = await Run.create(req.body);
    res.json(newRun);
  } catch (err) {
    next(err);
  }
});
