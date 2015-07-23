'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('feed', {
    url: '/feed',
    templateUrl: 'app/feed/feed.html',
    controller: 'FeedCtrl'
  });

});