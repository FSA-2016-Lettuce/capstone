const Sequelize = require ('sequelize');
const db = require ('../db')

const Image = db.define('image', {
  name: {
    type: Sequelize.TEXT,
    defaultValue: 'image',
  },

});

module.exports = Image;
