// const { Runner } = require('mocha');
const Sequelize = require('sequelize');
const db = require('../db');
const moment = require('moment');
const Route = require('./Route');

const Run = db.define('run', {
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  pace: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('OPEN', 'ACTIVE', 'COMPLETED'),
  },
});

// Set the Run status based on the current time relative to the Run time
Run.beforeCreate(async (run) => {
  // all Runs are initialized with association to Route 1, since they must have a Route

  // this distance needs to be replaced with calculated route distance based on the route association
  const now = moment();
  const runDistance = 4.5;
  const runDuration = run.pace * runDistance;
  let runCloseTime = moment(run.startDate).add(runDuration + 3600, 'seconds');

  // set run status based on relative time
  if (run.startDate > now) {
    run.status = 'OPEN';
  } else {
    if (now < runCloseTime) {
      run.status = 'ACTIVE';
    } else {
      run.status = 'COMPLETED';
    }
  }
});

module.exports = Run;
