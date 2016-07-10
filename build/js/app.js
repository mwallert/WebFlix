
(function () {

    'use strict';

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
    angular.module('webflixApp', ['ui.router'])
        .config(config);

    
    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        /**
         * Default state
         */
        $urlRouterProvider.otherwise('/movies');


        /**
         * State provider
         */

        // TODO: Use ui-router resolve function to initialize movies. Will make movies array available in child states.
        $stateProvider
            .state('movies', {
                url: '/movies',
                templateUrl: 'build/partials/movies/movies.html',
                controller: 'MoviesController',
                controllerAs: 'movies'
            })
            .state('movies.movie', {
                url: '/:movie_title',
                templateUrl: 'build/partials/movies/movie.html',
                controller: 'MovieController',
                controllerAs: 'movie',
                resolve: {
                    movie: ["movies", "MoviesService", "$stateParams", function (movies, MoviesService, $stateParams) {
                        return MoviesService.find($stateParams.movie_title);
                    }]
                }
            });

    }

}());


(function () {

    'use strict';

    angular.module('webflixApp')
        .controller('MovieController', MovieController);


    function MovieController() {

        var vm = this;
        vm.test = 'testing testing';
    }

}());

/**
 * Created by Neil Strain on 7/10/2016.
 */

(function () {

    'use strict';


}());


(function () {

    'use strict';

    MoviesController.$inject = ["Movies"];
    angular.module('webflixApp')
        .controller('MoviesController', MoviesController);

    function MoviesController(Movies) {

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
                    vm.selectedMovie = vm.movies[0];
                });
        }


        function getMovies() {
            return Movies.getMovies()
                .then(function () {
                    vm.movies = Movies.movies;
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
        }
    }

}());
