'use strict';

angular.module('coderRead')

.config(function($stateProvider) {

  $stateProvider

  .state('favorites', {
    url: '/favorites',
    templateUrl: 'app/favorites/favorites.html',
    controller: 'FavoritesCtrl'
  });

});