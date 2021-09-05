const router = require('express').Router();
const {
  models: { Image },
} = require('../db');

module.exports = router;

router.get('/:userId', async (req, res, next) => {
  try {
    const profileImage = await Image.findAll();
    res.status(200).send(profileImage);
  } catch (e) {
    next(e);
  }
});

router.post('/:userId', async (req, res, next) => {
  try {
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`);
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
  } catch (e) {
    next(e);
  }
});
