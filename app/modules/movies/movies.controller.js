
(function () {

    'use strict';

    angular.module('webflixApp')
        .controller('MoviesController', MoviesController);

    function MoviesController(MoviesService) {

        var vm = this;

        vm.getMovies = getMovies;
        vm.movies = [];
        vm.selectMovie = selectMovie;
        vm.selectedMovie = {};


        init();

        // Get movies and select the first one when the app loads.
        function init() {
            vm.getMovies()
                .then(function () {
                    console.log(vm.movies);
                    vm.selectedMovie = vm.movies[0];
                });
        }

        function getMovies() {
            return MoviesService.getMovies()
                .then(function () {
                    vm.movies = MoviesService.movies;
                });
        }
        

        function selectMovie(movie) {
            vm.selectedMovie = movie;
        }
    }

}());
