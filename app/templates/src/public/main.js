'use strict';

(function () {
  angular.module('<%= appPrefix %>App', [
    // Third-party libraries
    'ui.router',

    // As part of the build process, all partials are automatically added the angular template cache
    'templates',

    // Miscellaneous
    'constants',
    'routes',
//  'someFilter',
//  'someService',

    // Components
    'navBarDirective',
    'svgIconDirective',
    'toastDirective',

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
})();
