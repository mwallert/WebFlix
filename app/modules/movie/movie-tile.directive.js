(function () {

  'use strict';

  angular.module('webflixApp')
    .directive('movieTile', movieTile);

  function movieTile() {
    function controller() {
      var vm = this;
      this.alertTitle = function alertTitle() {
        alert(vm.movie.title);
      };
    }
    return {
      restrict: 'E',
      controller: controller,
      controllerAs: 'movietile',
      bindToController: true,
      scope: {
        movie: '=',
        selectedMovie: '='
      },
      templateUrl: 'build/partials/movie/movie-tile.html'
    };
  }

}());
