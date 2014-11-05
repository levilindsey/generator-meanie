(function () {
  angular.module('<%= appPrefix %>HomeController', [])

    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(appName) {
    var home = this;

    home.appName = appName;
  }
})();
