'use strict';

angular.module('coderRead')

.controller('NavCtrl', function($scope, $rootScope, $auth, $window, User) {

  // allow bootstrap tooltips on this page
  angular.element('[data-toggle="tooltip"]').tooltip();


  /*====================================
  =            ON DOM READY            =
  ====================================*/
  $(function() {
    $('.toggle-nav').click(function() {
      $scope.toggleNav();
    });
  });


  /*========================================
  =            CUSTOM FUNCTIONS            =
  ========================================*/
  $scope.toggleNav = function() {
    $('#site-wrapper').toggleClass('show-nav');
  };

});