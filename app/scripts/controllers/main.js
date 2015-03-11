'use strict';

/**
 * @ngdoc function
 * @name angularjsPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPocApp
 */
angular.module('angularjsPocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
