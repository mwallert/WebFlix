angular.module('webflixApp')
  .controller('MovieController', MovieController);

  function MovieController(movie){
    this.movie = movie;
  }
