const databaseServer = require('./database-server');
const httpServer = require('./http-server');

databaseServer.init();
httpServer.init();
