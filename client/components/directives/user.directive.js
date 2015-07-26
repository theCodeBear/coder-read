'use strict';

angular.module('coderRead')

.directive('githubLogin', function($state, $auth, User) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        $auth.authenticate('github').then(function(data) {
          User.save(data.data.user);
          $state.go('app.feed');
        });
      });
    }
  };

})

.directive('logoutUser', function($state, User) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        User.logout();
        $state.go('app.landing');
      });
    }
  };

});