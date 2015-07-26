'use strict';

angular.module('coderRead', ['ui.router', 'ngSanitize', 'ngPrettyJson', 'satellizer', 'angular-jwt'])

.run(function($auth, $window, $http, $rootScope, $state, jwtHelper, User) {

  $rootScope.isLoggedIn = function() {
    return $auth.isAuthenticated();
  };

  // on website load, if user has token in localstorage, save their user info to user service
  if ($auth.isAuthenticated()) {
    User.save(JSON.parse($window.localStorage.getItem('user')));
    // $http.defaults.headers.common.Origin = 'http://localhost'
    // $http.defaults.headers.common.Access-Control-Request-Method = 'GET';
    // $http.defaults.headers.common.Access-Control-Request-Headers = 'X-Custom-Header';
    // $http.defaults.headers.common.Authorization = 'token ' + $window.localStorage.getItem('satellizer_token');
  }

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    // if route requires authentication
    if (toState.data && toState.data.authenticate === true) {
      var encodedToken = $window.localStorage.getItem('satellizer_token');
      // if value in localStorage is valid JWT, check if expired
      if (isItJWT(encodedToken)) {
        var expired = jwtHelper.isTokenExpired(encodedToken);
        if (expired) {
          event.preventDefault();
          // here probably just automatically renew token.. don't do now, maybe later
        }
      } else {
        // if value in localStorage is not valid JWT, prevent state change, route to landing page
        event.preventDefault();
        $state.go('app.landing');
      }
    }
  });

  // works if there aren't 3 parts to JWT, but if there are other problems an error still thrown
  function isItJWT(encodedJWT) {
    try {
      jwtHelper.decodeToken(encodedJWT);
    } catch(error) {
      console.warn('Error: Invalid token value or missing token. Likely problem: Not Logged In');
      return false;
    }
    return true;
  }

})


.config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, jwtInterceptorProvider) {

  $urlRouterProvider.otherwise('/');

  $authProvider.github({
    clientId: '4122105d3a016771284e'
  });
  $authProvider.httpInterceptor = false;

  // need to figure out how to implement this auth stuff correctly later
  jwtInterceptorProvider.tokenGetter = function() {//($window) {
    return localStorage.getItem('satellizer_token');
  };
  // $httpProvider.interceptors.push('jwtInterceptor');

});
