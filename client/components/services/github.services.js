'use strict';

angular.module('coderRead')

.factory('Github', function($q, $http) {

// return a promise for the given gitub file in the given repo by the given github user
  function getFile(username, reponame, filepath) {
    $http.defaults.headers.common.Accept = 'application/vnd.github.3.raw';
    return $http.get('http://api.github.com/repos/'+username+'/'+reponame+'/contents/'+filepath);
  }

  return { getFile: getFile };

});