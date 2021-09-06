const { db } = require('./db');
const PORT = process.env.PORT || 8081;
const app = require('./app');
const seed = require('../script/seed');
const socketIo = require('socket.io');
const flockSocket = require('./socket');

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () =>
      console.log(`Ducks fly together on port ${PORT}`)
    );

    // Create our socket
    const io = socketIo(server);
    // Handle sockets
    flockSocket(io);
  } catch (ex) {
    console.log(ex);
  }
};

init();
