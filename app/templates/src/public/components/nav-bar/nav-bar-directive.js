(function () {
  angular.module('navBarDirective', [])

    .directive('navBar', navBar);

  function navBar() {
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
