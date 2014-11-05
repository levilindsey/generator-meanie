'use strict';

describe('Controller: LoginCtrl', function () {

  var login, scope;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    login = $controller('LoginCtrl', {
      $scope: scope
    })
  }));

  // ---  --- //

  it('should ...', function () {
    // TODO:
    expect(true).toBeTruthy();
  });
});
