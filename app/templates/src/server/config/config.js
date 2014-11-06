/**
 * @module config
 *
 * Holds server-side configuration data for the app.
 */

var secureConfig = require('./secure-config');

// Translate the relative project root path to an absolute path for the current file system
var projectRoot = require('path').resolve(__dirname + '/../../..');

var config = {};

config.environment = process.argv[2] || 'development';

// Include secure configuration data
config.app = secureConfig.app;

config.database = {};

// Important variables for the application server
config.app.port = 3000;
config.app.url = 'http://localhost:' + config.app.port;

config.app.liveReloadPort = 35729;

// Locations of some important files
config.distPath = projectRoot + '/dist';
config.viewsPath = projectRoot + '/src/server/views';
config.faviconPath = config.distPath + '/favicon-32x32.png';
config.indexPath = config.distPath + '/index.html';
config.pageMissingPath = config.viewsPath + '/404.ejs';

// Variables that depend on the current execution environment
switch (config.environment) {
  case 'development':
    config.app.port = 3000;
    config.app.url = '0.0.0.0:' + config.app.port;
    break;
  case 'test':
    config.app.port = process.env.PORT || 3000;
    config.app.url = 'http://localhost:' + config.app.port;
    break;
  case 'staging':
    config.app.port = process.env.PORT || 3000;
    config.app.url = 'http://localhost:' + config.app.port;
    break;
  case 'production':
    config.app.port = process.env.PORT || 3000;
    config.app.url = 'http://localhost:' + config.app.port;
    break;
  default:
    throw new Error('Invalid mode: ' + config.environment);
}

module.exports = config;
