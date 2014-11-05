(function () {
  angular.module('<%= appPrefix %>NavBarDirective', [])

    .directive('<%= appPrefix %>NavBar', <%= appPrefix %>NavBar);

  function <%= appPrefix %>NavBar() {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/nav-bar/nav-bar.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
    }
  }
})();
