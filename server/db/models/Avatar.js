const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Avatar = db.define('avatar', {
  imageName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '/defaultProfile.png',
  }
})

module.exports = Avatar;
