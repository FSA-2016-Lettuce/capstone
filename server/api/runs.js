const router = require('express').Router();
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const run = await Run.findByPk(req.params.id, {
      include: [{ model: Route, include: [Waypoint] }, { model: User }],
    });
    res.json(run);
  } catch (err) {
    next(err);
  }
});
