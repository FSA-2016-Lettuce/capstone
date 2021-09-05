const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  //the below keys are needed to satisfy Postgres format
    imageType: {
      type: Sequelize.STRING,
    },
    imageName: {
      type: Sequelize.TEXT,
      defaultValue: 'Profile Image'
    },
    imageData: {
      type: Sequelize.BLOB
    }

});

module.exports = Image;

