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
      // Calling a function in case you want to expand upon this.
      $scope.toggleNav();
    });
  });


  /*========================================
  =            CUSTOM FUNCTIONS            =
  ========================================*/
  $scope.toggleNav = function() {
    if ($('#site-wrapper').hasClass('show-nav')) {
      // Do things on Nav Close
      $('#site-wrapper').removeClass('show-nav');
    } else {
      // Do things on Nav Open
      $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
  }

});