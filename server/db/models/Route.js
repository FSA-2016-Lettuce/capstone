const Sequelize = require('sequelize')
const db = require('../db')

const Run = db.define('run', {
    startLongitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max:180,
      min:-180
    }
    }
  },
  startLatitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max:90,
      min:-90
    }
    },
  endLongitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max:180,
      min:-180
    }
    }
  },
  endLatitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max:90,
      min:-90
    }
    },
})

module.exports = Route


