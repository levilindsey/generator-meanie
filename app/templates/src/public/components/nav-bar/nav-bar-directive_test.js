'use strict';

describe('Directive: <%= appPrefix %>-nav-bar', function () {

  var $compile, $rootScope, element;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(['$compile', '$rootScope', function ($c, $r) {
    $compile = $c;
    $rootScope = $r;
    element = compileNavBar();
  }]));

  function compileNavBar() {
    var template = '<<%= appPrefix %>-nav-bar></<%= appPrefix %>-nav-bar>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    // TODO:

    expect(true).toBeTruthy();
  });
});
