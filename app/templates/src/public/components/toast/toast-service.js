angular.module('toastService', [])

    .factory('Toast', function($rootScope, $compile) {
      var Toast;

      var rootElement = angular.element(document.querySelector('[ng-app]'));

      var defaultWidth = 200;
      var defaultDuration = 2400;
      var topPosition = 20;

      /**
       * @param {string} text
       * @param {number} width
       * @param {number} duration
       */
      function compileToast(text, width, duration) {
        var template = '<toast text="' + text + '" width="' + width + '" duration="' + duration + '"></toast>';
        var element = angular.element(template);
        return $compile(element)($rootScope);
      }

      /**
       * @param {string} text
       * @param {number} [width=300]
       * @param {number} [duration=2400]
       */
      function addToast(text, width, duration) {
        var element;

        width = width || defaultWidth;
        duration = duration || defaultDuration;

        element = compileToast(text, width, duration);
        rootElement.append(element);
        element.css('top', topPosition + 'px');
      }

      function notYetImplemented() {
        addToast('Not yet implemented');
      }

      Toast = {
        toast: addToast,
        notYetImplemented: notYetImplemented
      };

      return Toast;
    });
