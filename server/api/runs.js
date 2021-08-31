const router = require('express').Router();
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
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

router.get('/', async (req, res, next) => {
  try {
    const runs = await Run.findAll({
      include: [
        {
          model: Route,
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
