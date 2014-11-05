'use strict';

describe('Service: Toast', function () {

  beforeEach(module('<%= appPrefix %>App'));

  // ---  --- //

  it('should contain a Toast service', function () {
    inject(function (Toast) {
      expect(Toast).toBeDefined();
    });
  });

  it('should have exposed properties', function () {
    inject(function (Toast) {
      expect(Toast.toast).toBeDefined();
      expect(Toast.notYetImplemented).toBeDefined();
    });
  });

  // TODO: test the actual DOM manipulation logic
});
