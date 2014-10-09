'use strict';

angular.module('appNameApp', [
  // Third-party libraries
  'ui.router',

  // As part of the build process, all partials are automatically added the angular template cache
  'templates',

  // Helpers
  'constants',
  'routes',
//  'someFilter',
//  'someService',

  // Components
  'navBarDirectives',
  'svgIconDirectives',
  'toastDirectives',

  // Models
  'userService',

  // Routes
  'homeController',
  'loginController'
])

    .run(function () {
      // TODO:
    });
