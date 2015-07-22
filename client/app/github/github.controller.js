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
      $scope.githubApi = createCodeOrderedList(data.data).innerHTML;
    });
  };

  $scope.isAFile = function(filePath) {
    return filePath[filePath.length-1] !== '/';
  }

  // create an html ordered list from the contents of the file
  function createCodeOrderedList(file) {
    console.log(typeof file);
    if (typeof file === 'object') //{
      file = JSON.stringify(file);
      /*file = file.split(/([{,}])/g);
      console.log(file);
    } else*/ file = file.split('\n');
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
