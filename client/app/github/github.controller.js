'use strict';

angular.module('coderRead')

.controller('GithubCtrl', function($scope, Github) {

  $scope.github ={};
  $scope.github.username = 'thecodebear';
  $scope.github.reponame = 'fortress-assault';
  $scope.github.branchname = 'master';

  $scope.getFile = function(index) {
    // $scope.filename = $scope.directoryStructure[index].match(/\w+[\W+\w+]*/)[0];
    $scope.filepath = $scope.githubTree[index].path;
    Github.getFile($scope.github.username, $scope.github.reponame, $scope.filepath)
    .then(function(data) {
      $scope.githubApi = data.data;
    });
  };

});