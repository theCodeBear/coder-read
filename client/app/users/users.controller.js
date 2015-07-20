'use strict';

angular.module('coderRead')

.controller('UserCtrl', function($scope, User) {

  User.getUserNames().then(function(userArray) {
    $scope.userIndex = userArray;
  });

});