'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app.newPost', {
    url: '/newPost',
    templateUrl: 'app/newPost/newPost.html',
    controller: 'NewPostCtrl'
  });

});