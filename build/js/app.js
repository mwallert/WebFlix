
MoviesController.$inject = ["Movies"];
angular.module('webflixApp', []);

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

angular.module('webflixApp')
    .service('Movies', Movies);

Movies.$inject = ['$http'];

function Movies($http) {

    var vm = this;

    vm.movies = {};

    vm.getMovies = function () {
        return $http.get('http://api.themoviedb.org/3/genre/18/movies?api_key=ff562fe235d88443c78581b04f7edb57')
            .then(function success(res) {

                vm.movies = res.data.results;

                console.log(vm.movies);

            },
                function error(err) {
                    console.log(err);
                });
    };

    vm.showContent = function (movie) {
        
        return movie.summary;
    }
}