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

// Post a message to a specific run
router.post('/:runId', requireToken, async (req, res, next) => {
  try {
    // Grab info from req.body
    const { content, user, run } = req.body;
    // Create new message with the content from req.body
    const newMessage = await Message.create({ content });
    // Grab id of this message
    const newMessageId = newMessage.id;
    // Set associations
    await newMessage.setUser(user.id);
    await newMessage.setRun(run.id);
    // NOTE: Sequelize DOES NOT include associations on the newMessage instance
    // upon setting them. Therefore, let's get the newMessage with the associations
    const newMessagePlus = await Message.findOne({
      where: {
        id: newMessageId,
      },
      include: [
        {
          model: User,
        },
        { model: Run },
      ],
    });

    res.json(newMessagePlus);
  } catch (err) {
    next(err);
  }
});
