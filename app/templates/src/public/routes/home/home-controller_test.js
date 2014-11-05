'use strict';

describe('Controller: HomeCtrl', function () {

  var home, scope;

  beforeEach(module('<%= appPrefix %>App'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    home = $controller('HomeCtrl', {
      $scope: scope
    })
  }));

  // ---  --- //

  it('should attach appName to the controller object', function () {
    expect(home.appName).toBeDefined();
  });
});
