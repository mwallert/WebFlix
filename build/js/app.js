
(function () {

    'use strict';

    angular.module('webflixApp', []);

}());


(function () {

    'use strict';

    MoviesController.$inject = ["Movies"];
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


(function () {

    'use strict';

    angular.module('webflixApp')
        .service('Movies', Movies);

    Movies.$inject = ['$http'];

    function Movies($http) {

        var vm = this;

        vm.getMovies = getMovies;
        vm.movies = {};

        
        function getMovies () {
            return $http.get('http://api.themoviedb.org/3/genre/18/movies?api_key=ff562fe235d88443c78581b04f7edb57')
                .then(function success(res) {

                        vm.movies = res.data.results;

                        console.log(vm.movies);

                    },
                    function error(err) {
                        console.log(err);
                    });
        };
    }

}());
