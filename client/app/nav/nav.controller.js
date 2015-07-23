'use strict';

angular.module('coderRead')

.controller('NavCtrl', function($scope, $rootScope) {

  // allow bootstrap tooltips on this page
  angular.element('[data-toggle="tooltip"]').tooltip();

  $scope.login = function() {
    $rootScope.loggedIn = true;
  };

});