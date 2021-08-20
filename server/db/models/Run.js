const { Runner } = require('mocha');
const Sequelize = require('sequelize');
const db = require('../db');
const moment = require('moment');

const Run = db.define('run', {
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  paceMinutes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paceSeconds: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('OPEN', 'ACTIVE', 'COMPLETED'),
  },
});

// Set the Run status based on the current time relative to the Run time
Run.beforeCreate(async (run) => {
  const now = moment();

  // this distance needs to be replaced with calculated route distance based on the route association
  const runDistance = 4.5;
  const runDurationMinutes =
    (run.paceMinutes + run.paceSeconds / 60) * runDistance;
  let runCloseTime = moment(run.startDate).add(
    runDurationMinutes + 60,
    'minutes'
  );

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
