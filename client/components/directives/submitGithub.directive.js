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

});