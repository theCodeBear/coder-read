'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app.landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html',
    controller: 'LandingCtrl'
  });

});
