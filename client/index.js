'use strict';

angular.module('coderRead', ['ui.router', 'ngSanitize'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

});
