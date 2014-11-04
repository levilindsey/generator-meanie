'use strict';

describe('Main Module: <%= appPrefix %>App', function () {

  var rootScope;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(function ($rootScope) {
    rootScope = $rootScope;
  }));

  // ---  --- //

  it('should attach routeState to the rootScope', function () {
    expect(rootScope.routeState).not.toBeUndefined();
  });
});
