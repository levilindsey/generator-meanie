/**
 * @module secure-config
 *
 * Defines secure configuration data.
 */

var secureConfig = {};

secureConfig.app = {};

// TODO: add database credentials

// This string is used to encrypt session data
secureConfig.app.sessionSecret = 'secret';

module.exports = secureConfig;
