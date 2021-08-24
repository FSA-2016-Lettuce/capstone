const router = require('express').Router();
const {
  models: { Route },
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
