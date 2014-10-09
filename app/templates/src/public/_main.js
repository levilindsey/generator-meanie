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
  'svgIconDirectives',
  'toastDirectives',

  // Models
  'dataNameService',
  'userService',

  // Routes
  'homeController'
])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
