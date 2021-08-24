const router = require('express').Router();
const {
  models: { Route },
} = require('../db');
module.exports = router;

router.get('/:routeId', async (req, res, next) => {
  try {
    const route = await Route.findByPk(req.params.routeId);
    const waypoints = await route.getWaypoints();
    res.json(waypoints);
  } catch (err) {
    next(err);
  }
});
