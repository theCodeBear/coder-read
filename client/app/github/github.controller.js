'use strict';

angular.module('coderRead')

.controller('GithubCtrl', function($scope, Github) {

  $scope.github ={};
  $scope.github.username = 'thecodebear';
  $scope.github.reponame = 'fortress-assault';
  $scope.github.branchname = 'master';

  $scope.getFile = function(index) {
    var filepath = $scope.githubTree[index].path;
    console.log('filepath', filepath);
    Github.getFile($scope.github.username, $scope.github.reponame, filepath)
    .then(function(data) {
      $scope.githubApi = data.data;
    });
  };

});