const db = require('./db');

const User = require('./models/User');
const Run = require('./models/Run');
const Route = require('./models/Route');
const Waypoint = require('./models/Waypoint');
const Image = require('./models/Image');
const { useDateRangeValidation } = require('@material-ui/lab/internal/pickers/hooks/useValidation');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Run,
    Route,
    Waypoint,
    Image
  },
};

//Model associations
User.belongsToMany(Run, { through: 'runHistory' });
Run.belongsToMany(User, { through: 'runHistory' });

Route.hasMany(Run);
Run.belongsTo(Route);

Route.hasMany(Waypoint);
Waypoint.belongsTo(Route);

Image.belongsTo(User);
User.belongsTo(Image)

Image.belongsTo(Run);
Run.hasMany(Image);
