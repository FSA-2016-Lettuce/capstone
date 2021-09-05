const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/routes', require('./routes'));
router.use('/runs', require('./runs'));
router.use('/avatars', require('./avatars'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
