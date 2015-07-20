'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html'
  });

});
