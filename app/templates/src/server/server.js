/**
 * @module server
 *
 * Creates the server instance, sets up middleware, and attaches route handlers.
 */

/**
 * Sets up the server.
 */
exports.init = function () {
  var deferred = require('q').defer(),
      server = require('express')(),
      database = require('./database/database'),
      middleware = require('./middleware/middleware'),
      routes = require('./routes/routes'),
      config = require('./config/config');

  database.init();
  middleware.init(server);
  routes.init(server);

  // Clean up some system state for development and testing
  if (config.environment === 'development') {
    database.clear();
  }

  deferred.resolve(server);

  return deferred.promise;
};
