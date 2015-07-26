'use strict';

angular.module('coderRead')

.factory('User', function($http, $q, $window, $auth) {

// PRIVATE VARIABLES
  var _user = {};


// PUBLIC SERVICE OBJECT
  var service = {
    get: get,
    save: save, 
    logout: logout,
    clear: clear
  };


  return service;

// PRIVATE FUNCTIONS



// PUBLIC FUNCTIONS

  // get user
  function get() {
    return _user;
  }

  // save user to service and localStorage
  function save(updatedUser) {
    _user = updatedUser;
    $window.localStorage.setItem('user', JSON.stringify(_user));
  }

  // logout user
  function logout() {
    $auth.logout();
    $window.localStorage.clear();
    service.clear();
  }

  // clear user data from service
  function clear() {
    _user = {};
  }

});