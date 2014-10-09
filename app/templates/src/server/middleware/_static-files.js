/**
 * @module static-files
 *
 * Handles the serving of static files.
 */

var config = require('../config/config');

/**
 * Attaches middleware to the server.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  setUpStaticFiles(server);
};

/**
 * Attaches middleware to serve static files.
 *
 * @param {Object} server
 */
function setUpStaticFiles(server) {
  var mountPath, staticPath, serveStatic;

  serveStatic = require('serve-static'); // For serving static files

  // Set up the public files
  mountPath = '/';
  staticPath = config.distPath;
  server.use(mountPath, serveStatic(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);
}
