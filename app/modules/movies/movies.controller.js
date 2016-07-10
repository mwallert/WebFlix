
(function () {

    'use strict';

    angular.module('webflixApp')
        .controller('MoviesController', MoviesController);

    function MoviesController(Movies) {

        var vm = this;

        vm.movies = [];
        vm.selectMovie = selectMovie;
        vm.selectedMovie = {};


        init();

        function init() {
            // Get movies and select the first one when the app loads.
            Movies.getMovies()
                .then(function () {
                    vm.movies = Movies.movies;
                    vm.selectedMovie = vm.movies[0];
                });
        }


        function selectMovie(movie) {
            vm.selectedMovie = movie;
        }
    }

}());
