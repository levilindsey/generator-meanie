'use strict';

describe('Directive: <%= appPrefix %>-nav-bar', function () {

  var $compile, $rootScope, element;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileNavBar();
  }));

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
