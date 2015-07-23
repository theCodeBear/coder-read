'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('newPost', {
    url: '/newPost',
    templateUrl: 'app/newPost/newPost.html',
    controller: 'NewPostCtrl'
  });

});