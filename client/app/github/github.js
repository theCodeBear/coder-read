'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('githubSubmission', {
    url: '/githubSubmission',
    templateUrl: 'app/github/github.html',
    controller: 'GithubCtrl',
    data: {
      authenticate: true
    }
  });
});