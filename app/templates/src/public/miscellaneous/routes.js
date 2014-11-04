(function () {
  angular.module('<%= appPrefix %>Routes', [])

    .config(config)
    .run(run);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'routes/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'routes/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  }

  function run($rootScope) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateNotFound', stateNotFound);
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    $rootScope.$on('$stateChangeError', stateChangeError);
    $rootScope.$on('$viewContentLoading', viewContentLoading);
    $rootScope.$on('$viewContentLoaded', viewContentLoaded);

    // ---  --- //

    function stateChangeStart(event, toState, toParams, fromState, fromParams) {
      console.debug('$stateChangeStart', toState.name);

      $rootScope.routeState.stateName = toState.name;
    }

    function stateNotFound(event, unfoundState, fromState, fromParams) {
      console.error('$stateNotFound', unfoundState.name);
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
      console.debug('$stateChangeSuccess', toState.name);
    }

    function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
      console.error('$stateChangeError', toState.name, error);
    }

    function viewContentLoading(event) {
      console.debug('$viewContentLoading');
    }

    function viewContentLoaded(event) {
      console.debug('$viewContentLoaded');
    }
  }
})();
