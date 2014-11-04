(function () {
  angular.module('homeController', [])

    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(appName) {
    var home = this;

    home.appName = appName;
  }
})();
