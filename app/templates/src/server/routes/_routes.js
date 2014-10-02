/**
 * @module routes
 *
 * Attaches the route handlers.
 */

/**
 * Attaches the route handlers to the server.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  var viewRoutes = require('./view-routes');

  viewRoutes.init(server);
};
