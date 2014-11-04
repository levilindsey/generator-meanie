'use strict';

describe('Controller: HomeCtrl', function () {

  var home, scope;

  beforeEach(module('<%= appPrefix %>HomeController'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    home = $controller('homeCtrl', {
      $scope: scope
    })
  }));

  // ---  --- //

  it('should attach appName to the controller object', function () {
    expect(home.appName).not.toBeUndefined();
  });
});
