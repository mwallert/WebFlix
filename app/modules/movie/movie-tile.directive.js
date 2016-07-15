(function () {

  'use strict';

  angular.module('webflixApp')
    .directive('movieTile', movieTile);

  function movieTile() {
    return {
      restrict: 'E',
      templateUrl: 'build/partials/movie/movie-tile.html'
    };
  }

}());
