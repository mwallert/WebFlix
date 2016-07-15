(function () {

  'use strict';

  angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

  function MoviesController(allMovies) {
    var vm = this;

    vm.movies = allMovies;
    vm.selectedMovie = allMovies[0];
  }

}());
