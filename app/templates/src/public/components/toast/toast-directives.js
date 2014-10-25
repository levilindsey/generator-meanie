angular.module('toastDirectives', [])

    .directive('toast', function ($timeout) {
      var toastTransitionDuration = 300;

      return {
        restrict: 'E',
        scope: {
          text: '@',
          width: '@',
          duration: '@'
        },
        templateUrl: 'components/toast/toast.html',
        link: function (scope, element, attrs) {
          var duration = parseInt(scope.duration);

          element.css('width', scope.width + 'px');

          // Fade the toast in
          // The CSS transition needs to start shortly after the element has been added to the DOM
          $timeout(function () {
            element.addClass('shown');
          }, 10);

          // Fade the toast out
          $timeout(function () {
            element.removeClass('shown');
          }, duration);

          // Remove the toast from the DOM
          $timeout(function () {
            element.remove();
          }, duration * 2 + toastTransitionDuration);
        }
      };
    });
