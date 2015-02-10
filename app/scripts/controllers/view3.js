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
    $scope.name = "VIEW3 ROCK!";

    $scope.myModel = {
      name: "Bartolo",
      nick:"O CTO" ,
      message:function() {
        alert("HELLO GUYS!");
      },
      updateName:function(newName) {
        this.name = newName;
      }
    };

    $scope.alph = [

        "A", "B", "C", "D", "E", "F", "GG"
              ];

  });
