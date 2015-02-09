'use strict';

describe('Controller: View3ctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSeedApp'));

  var View3ctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    View3ctrlCtrl = $controller('View3ctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
