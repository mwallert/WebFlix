
angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

function MoviesController(Movies) {

    var vm = this;

    vm.movies = [];
    vm.selectedMovie = {};

    vm.currentContent = '';

    Movies.getMovies()
        .then(function () {
            vm.movies = Movies.movies;
        });

    vm.selectMovie = function (movie) {
        vm.selectedMovie = movie;
    }

    vm.showContent = function (movie) {
        vm.currentContent = Movies.showContent(movie);
    }

    vm.test = 'Hello Everyone!';
}