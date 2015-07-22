'use strict';

angular.module('coderRead')

.factory('Github', function($q, $http) {

// return a promise for the given gitub file in the given repo by the given github user
  function getFile(username, reponame, filepath, branchname) {
    $http.defaults.headers.common.Accept = 'application/vnd.github.3.raw';
    if (!branchname) branchname = 'master';
    return $http.get('http://api.github.com/repos/'+username+'/'+reponame+'/contents/'+filepath+'?ref='+branchname);
  }

  function getBranch(username, reponame, branchname) {
    return $http.get('http://api.github.com/repos/'+username+'/'+reponame+'/branches/'+branchname);
  }

  function getTree(getTreeUrl) {
    return $http.get(getTreeUrl+'?recursive=1');
  }

  return {
    getFile: getFile,
    getBranch: getBranch,
    getTree: getTree
  };

});