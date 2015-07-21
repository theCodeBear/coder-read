'use strict';

angular.module('coderRead')

.directive('submitGithub', function(Github) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        Github.getFile(scope.github.username,
                       scope.github.reponame,
                       scope.github.filepath)
        .then(function(data) {
          scope.githubApi = data.data;
        }).catch(function(data) {
          console.log('error getting github file', data);
          scope.githubApi = data.data.message;
        }).finally(function() {

        });
      });
    }
  };

})

.directive('githubBranch', function(Github) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        Github.getBranch(scope.github.username,
                         scope.github.reponame,
                         scope.github.branchname)
        .then(function(data) {
          Github.getTree(data.data.commit.commit.tree.url)
          .then(function(tree) {
            console.log(tree.data);
            var arrToDisplay = [];
            var dirObj = { /*files: []*/ }, pathArray = [], filename = '';
            tree.data.tree.forEach(function(node, i) {
              pathArray = node.path.match(/[^\/]+/g);
              filename = pathArray.length ? pathArray.slice(-1)[0]: node.path;
              var indent = '...'.repeat(pathArray.length-1);
              if (node.type === 'tree') filename += '/';
              filename = indent + filename;
              arrToDisplay.push(filename);
              createDirectoriesObj(dirObj, pathArray, filename, node);
            });
            console.log('dirOjb', dirObj);
            scope.directoryStructure = arrToDisplay;
            scope.githubTree = tree.data.tree;
            console.log('githubTree', scope.githubTree);

          });
        }).catch(function(data) {
          console.log('error getting github branch', data);
          scope.githubApi = data.data.message;
        });
      });
    }
  };
});


String.prototype.repeat = function(num) {
  return new Array(num+1).join(this);
}


function createDirectoriesObj(obj, pathArray, filename, node) {
  if (pathArray.length === 1) {
    obj[filename] = { name: filename/*, type: node.type*/ };
  } else {
    for (var i=0; i < pathArray.length; i++) {
      if (!(pathArray[i] in obj)) obj[pathArray[i]] = { name: filename/*, type: node.type*/ };
      else obj = obj[pathArray[i]];
    }
  }
}