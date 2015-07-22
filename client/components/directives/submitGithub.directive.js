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
        Github.getRepo(scope.github.username, scope.github.reponame).then(function(repoResult) {
          scope.repo = {
            name: repoResult.data.name,
            description: repoResult.data.description,
            url: repoResult.data.html_url,
            username: repoResult.data.owner.login,
            userGithubLink: repoResult.data.owner.html_url,
            userAvatar: repoResult.data.owner.avatar_url
          };
        }).catch(function(repoResult) {
          console.log('error getting github repo', repoResult);
          scope.githubApi = repoResult.data.message;
        });
        Github.getBranch(scope.github.username,
                         scope.github.reponame,
                         scope.github.branchname)
        .then(function(data) {
          Github.getTree(data.data.commit.commit.tree.url)
          .then(function(tree) {
            var arrToDisplay = [];
            var /*dirObj = {},*/ pathArray = [], filename = '';
            tree.data.tree.forEach(function(node, i) {
              pathArray = node.path.match(/[^\/]+/g);
              filename = pathArray.length ? pathArray.slice(-1)[0]: node.path;
              var indent = '...'.repeat(pathArray.length-1);
              if (node.type === 'tree') filename += '/';
              filename = indent + filename;
              arrToDisplay.push(filename);
              // createDirectoriesObj(dirObj, pathArray, filename, node);
            });
            scope.directoryStructure = arrToDisplay;
            scope.githubTree = tree.data.tree;
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

// creates a nested object of the project hierarchy
// function createDirectoriesObj(obj, pathArray, filename, node) {
//   if (pathArray.length === 1) {
//     obj[filename] = { name: filename };
//   } else {
//     for (var i=0; i < pathArray.length; i++) {
//       if (!(pathArray[i] in obj)) obj[pathArray[i]] = { name: filename };
//       else obj = obj[pathArray[i]];
//     }
//   }
// }