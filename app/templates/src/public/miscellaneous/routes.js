angular.module('routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'routes/home/home.html',
            controller: 'HomeCtrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'routes/login/login.html',
            controller: 'LoginCtrl'
          });
    })

    .run(function ($rootScope) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.debug('$stateChangeStart', toState.name);

        $rootScope.routeState.stateName = toState.name;
      });

      $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.error('$stateNotFound', unfoundState.name);
      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.debug('$stateChangeSuccess', toState.name);
      });

      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('$stateChangeError', toState.name, error);
      });

      $rootScope.$on('$viewContentLoading', function (event) {
        console.debug('$viewContentLoading');
      });

      $rootScope.$on('$viewContentLoaded', function (event) {
        console.debug('$viewContentLoaded');
      });
    });
