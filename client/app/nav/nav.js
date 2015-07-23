'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app', {
    abstract: true,
    templateUrl: 'app/nav/nav.html',
    controller: 'NavCtrl'
  });

});