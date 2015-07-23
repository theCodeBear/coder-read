'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('account', {
    url: '/account',
    templateUrl: 'app/account/account.html',
    controller: 'AccountCtrl'
  });

});