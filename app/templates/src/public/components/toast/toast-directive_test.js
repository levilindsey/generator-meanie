'use strict';

describe('Directive: <%= appPrefix %>-toast', function () {

  var $compile, $rootScope, element;
  var text = 'Test Toast';
  var width = 1000;
  var duration = 1000;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(['$compile', '$rootScope', function ($c, $r) {
    $compile = $c;
    $rootScope = $r;
    element = compileToast(text, width, duration);
  }]));

  /**
   * @param {String} text
   * @param {Number} width
   * @param {Number} duration
   */
  function compileToast(text, width, duration) {
    var template = '<<%= appPrefix %>-toast text="' + text + '" width="' + width + '" duration="' + duration + '"></<%= appPrefix %>-toast>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should display the notification text properly', function () {
    expect(element.html()).toMatch(new RegExp(text));
  });

  it('should set the width properly', function () {
    expect(element.css('width')).toBe(width + 'px');
  });

  // TODO: test that the element is removed after the duration is finished
});
