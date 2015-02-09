'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:View3ctrlCtrl
 * @description
 * # View3ctrlCtrl
 * Controller of the angularSeedApp
 */
angular.module('myApp.view3',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'views/view3.html',
    controller: 'View3Ctrl'
  });
}])

  .controller('View3Ctrl', function ($scope) {
    $scope.name = "view3";
  });
