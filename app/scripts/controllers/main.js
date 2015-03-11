'use strict';

/**
 * @ngdoc function
 * @name angularjsPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPocApp
 */
angular.module('angularjsPocApp')
  .controller('MainCtrl', function ($scope, $http /* IOC */) {

    $scope.author = { "name":"Bartolomeo", "surname":"Sorrentino" };


$http.get('http://192.168.0.10:3000/users').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log( data );

    $scope.partecipants = data;


  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

    console.log( "ERROR!" );
  });
});
