'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('search', {
    url: '/search',
    templateUrl: 'app/search/search.html',
    controller: 'SearchCtrl'
  });

});