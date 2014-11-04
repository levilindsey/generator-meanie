(function () {
  angular.module('svgIconDirective', [])

    .directive('svgIcon', svgIcon);

  function svgIcon() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        name: '@'
      },
      templateUrl: 'components/svg-icon/svg-icon.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
      scope.svgId = '#svg-icon-' + scope.name;
    }
  }
})();
