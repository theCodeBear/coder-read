'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('app.favorites', {
    url: '/favorites',
    templateUrl: 'app/favorites/favorites.html',
    controller: 'FavoritesCtrl'
  });

});