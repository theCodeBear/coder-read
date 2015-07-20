'use strict';

angular.module('coderRead')

.controller('GithubCtrl', function($scope, Github) {

  Github.getUserNames().then(function(userArray) {
    $scope.userIndex = userArray;
  });

});