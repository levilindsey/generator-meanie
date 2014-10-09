angular.module('svgIconDirectives', [])

    .directive('svgIcon', function () {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          name: '@'
        },
        templateUrl: 'components/svg-icon/svg-icon.html',
        link: function (scope, element, attrs) {
          scope.svgId = '#svg-icon-' + scope.name;
        }
      };
    });
