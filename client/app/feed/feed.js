'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app.feed', {
    url: '/feed',
    templateUrl: 'app/feed/feed.html',
    controller: 'FeedCtrl'
  });

});