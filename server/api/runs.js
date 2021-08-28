const router = require('express').Router();
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
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
    console.log('runs from server:', runs);
    res.json(runs);
  } catch (err) {
    next(err);
  }
});
