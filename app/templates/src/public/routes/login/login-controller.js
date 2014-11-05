(function () {
  angular.module('<%= appPrefix %>LoginController', [])

    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl() {
    var login = this;
  }
})();
