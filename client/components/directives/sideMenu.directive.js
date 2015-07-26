'use strict';

angular.module('coderRead')

.directive('clickClose', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        if ($('#site-wrapper').hasClass('show-nav')) {
          $('#site-wrapper').removeClass('show-nav');
        }
      });
    }
  };
  
});