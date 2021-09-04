const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { Route, Run, User, Message },
} = require('../db');
const moment = require('moment');
const { requireToken } = require('./utils');
module.exports = router;

// Get all messages associated with a specific run
router.get('/:runId', requireToken, async (req, res, next) => {
  try {
    const runId = req.params.runId;
    const messages = await Message.findAll({
      include: [
        {
          model: Run,
          where: {
            id: runId,
          },
          include: [Route],
        },
        { model: User },
      ],
      order: [['createdAt', 'ASC']],
    });
    res.json(messages);
  } catch (err) {
    next(err);
  }
});
