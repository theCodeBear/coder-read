'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('userComments', {
    url: '/userComments',
    templateUrl: 'app/userComments/userComments.html',
    controller: 'UserCommentsCtrl'
  });

});