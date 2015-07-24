'use strict';

angular.module('coderRead', ['ui.router', 'ngSanitize', 'ngPrettyJson', 'satellizer'])

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $urlRouterProvider.otherwise('/');

  $authProvider.github({
    clientId: '4122105d3a016771284e'
  });

});
