'use strict';

angular.module('coderRead')

.controller('GithubCtrl', function($scope, Github) {

  $scope.github = {};
  $scope.github.username = 'thecodebear';
  $scope.github.reponame = 'fortress-assault';
  $scope.github.branchname = 'master';

  $scope.getFile = function(index) {
    $scope.filepath = $scope.githubTree[index].path;
    Github.getFile($scope.github.username, $scope.github.reponame, $scope.filepath, $scope.github.branchname)
    .then(function(data) {
      // if json file just put it on $scope (ng-prettyjson will handle it)
      if ($scope.filepath.slice(-4) === 'json') $scope.githubApi = data.data;
      // if non-json file, break it up into an ordered list
      else $scope.githubApi = createCodeOrderedList(data.data).innerHTML;
    });
  };

  $scope.isAFile = function(filePath) {
    return filePath[filePath.length-1] !== '/';
  }

  $scope.fileIsJson = function(filePath) {
    return filePath.slice(-4) === 'json';
  }

  // create an html ordered list from the contents of the file
  function createCodeOrderedList(file) {
    file = file.split('\n');
    var liNode = '', text = '';
    var list = document.createElement('OL');
    file.forEach(function(line, index) {
      liNode = document.createElement('LI');
      text = document.createTextNode(file[index]);
      liNode.appendChild(text);
      list.appendChild(liNode);
    });
    return list;
  }

});
