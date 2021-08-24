const router = require('express').Router();
const {
  models: { Run, Route, Waypoint },
} = require('../db');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const run = await Run.findByPk(req.params.id, {
      include: [{ model: Route, include: [Waypoint] }],
    });
    console.log('hello from runs/:id GET route');
    res.json(run);
  } catch (err) {
    next(err);
  }
});
