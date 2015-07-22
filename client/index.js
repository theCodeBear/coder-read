'use strict';

angular.module('coderRead', ['ui.router', 'ngSanitize', 'ngPrettyJson'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

});
