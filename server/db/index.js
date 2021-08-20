//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Run = require('./models/Run');
const Route = require('./models/Route');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Run,
    Route
  },
}

//Model associations
User.hasMany(Run);
Run.hasMany(User);
Run.hasOne(Route);
Route.belongsToMany(Run);
