(function () {

  'use strict';

  angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

  function MoviesController(allMovies, $rootScope) {
    var vm = this;

    vm.movies = allMovies;
    vm.selectedMovie = allMovies[0];
    vm.selectMovie = selectMovie;

    /**
     * Select a movie.
     *
     * @param movie
     */
    function selectMovie(movie){
      vm.selectedMovie = movie;
    }
    /**
     * Gets the index of the selected movie and
     * Moves along the array accordingly
     * @param direction
     * @returns {*}
     */
    function getIndex(direction){
      var idx = _.indexOf(vm.movies, vm.selectedMovie),
        next = idx + direction;
      return next;
    }
    /**
    * Move function to handle direction
    * Also handles end of array movement
    *
    */
    function move(direction, dontMoveIf){
      $rootScope.$apply(function(){
        var next = getIndex(direction);
        if(dontMoveIf(next)) return;
        selectMovie(vm.movies[next]);
      });
    }
    /**
     * Moves us up the lists of movies
     * Adjusts the selected movie along the way
     *
     */
    Mousetrap.bind('j', function(){
        move(1, function(next){
          return next > vm.movies.length - 1;
        });
      });
    /**
     * Moves us down the lists of movies
     * Adjusts the selected movie along the way
     *
     */
    Mousetrap.bind('k', function(){
        move(-1, function(next){
          return next < 0;
        });
      });
  }
}());
