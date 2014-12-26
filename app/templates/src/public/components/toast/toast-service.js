(function () {
  angular.module('<%= appPrefix %>ToastService', [])

    .factory('Toast', Toast);

  function Toast($rootScope, $compile) {
    var Toast;

    var rootElement = angular.element(document.querySelector('[ng-app]'));

    var defaultWidth = 200;
    var defaultDuration = 2400;
    var topPosition = 20;

    Toast = {
      toast: addToast,
      notYetImplemented: notYetImplemented
    };

    // ---  --- //

    /**
     * @param {String} text
     * @param {Number} width
     * @param {Number} duration
     */
    function compileToast(text, width, duration) {
      var template = '<<%= appPrefix %>-toast text="' + text + '" width="' + width + '" duration="' + duration + '"></<%= appPrefix %>-toast>';
      var element = angular.element(template);
      return $compile(element)($rootScope);
    }

    /**
     * @param {String} text
     * @param {Number} [width=300]
     * @param {Number} [duration=2400]
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
      var message = 'Not yet implemented';
      console.warn(message);
      addToast(message);
    }

    return Toast;
  }
})();
