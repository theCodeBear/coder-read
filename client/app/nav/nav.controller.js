'use strict';

angular.module('coderRead')

.controller('NavCtrl', function($scope, $rootScope, $auth) {

  // allow bootstrap tooltips on this page
  angular.element('[data-toggle="tooltip"]').tooltip();

  $scope.authenticate = function(provider) {
    // $rootScope.loggedIn = true;
    $auth.authenticate(provider).then(function(data) {
      console.log('github auth', data);
    });
  };

  $scope.unLinkGithub = function() {
    console.log('authenticated:', $auth.isAuthenticated());
    $auth.logout();
  };

});