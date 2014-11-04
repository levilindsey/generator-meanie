(function () {
  angular.module('svgIconDirective', [])

    .directive('<%= appPrefix %>SvgIcon', <%= appPrefix %>SvgIcon);

  function <%= appPrefix %>SvgIcon() {
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
