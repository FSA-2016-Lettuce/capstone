const Sequelize = require('sequelize')
const db = require('../db')

const Run = db.define('run', {
    date: {
    type: Sequelize.DATE,
    allowNull: false,
    }
  },
  pace-minutes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pace-seconds: {
    type: SEQUELIZE.INTEGER,
    allowNull: false
  },
  status: {
    type: SEQUELIZE.ENUM('OPEN', 'IN-PROGRESS', 'COMPLETED');
  }
})

module.exports = Run


