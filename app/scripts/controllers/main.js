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

    $scope.author = { "name":"Bartolomeo", "surname":"Sorrentino", "title":"Chief Technology Officer" };
});
