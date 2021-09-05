const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  //the below keys are needed to satisfy Postgres format
    imageType: Sequelize.STRING,
    imageName: Sequelize.STRING,
    imageData: Sequelize.BLOB('long')

})

module.exports = Image;

