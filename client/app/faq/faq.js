'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app.faq', {
    url: '/faq',
    templateUrl: 'app/faq/faq.html',
    controller: 'FaqCtrl'
  });

});