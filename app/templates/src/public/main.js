'use strict';

(function () {
  angular.module('<%= appPrefix %>App', [
    // Third-party libraries
    'ui.router',

    // As part of the build process, all partials are automatically added the angular template cache
    '<%= appPrefix %>Templates',

    // Miscellaneous
    '<%= appPrefix %>Constants',
    '<%= appPrefix %>Routes',
//  '<%= appPrefix %>SomeFilter',
//  '<%= appPrefix %>SomeService',

    // Components
    '<%= appPrefix %>NavBarDirective',
    '<%= appPrefix %>SvgIconDirective',
    '<%= appPrefix %>ToastDirective',

    // Models
    '<%= appPrefix %>DataNameService',
    '<%= appPrefix %>UserService',

    // Routes
    '<%= appPrefix %>HomeController'
  ])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
})();
