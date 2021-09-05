const router = require('express').Router();
const {
  models: { Avatar, User },
} = require('../db');

module.exports = router;

//used to grab all avatars and enable selection
router.get('/', async (req, res, next) => {
  try {
    const choices = await User.findAll();
    res.json(choices);
  } catch (err) {
    next(err);
  }
});




