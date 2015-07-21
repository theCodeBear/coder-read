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
      var fileContents = data.data
      fileContents = addLineNumbers(fileContents);
      $scope.githubApi = fileContents.innerHTML;
      console.log('fileconts', $scope.githubApi);
      console.log(typeof $scope.githubApi)
    });
  };

  function addLineNumbers(file) {
    file = file.split('\n');
    var liNode = '', text = '';
    var list = document.createElement('OL');
    file.forEach(function(line, index) {
      liNode = document.createElement('LI');
      text = document.createTextNode(file[index]);
      liNode.appendChild(text);
      console.log(document.getElementById('codelines'));
      list.appendChild(liNode);
    });
    return list;
  }

});
