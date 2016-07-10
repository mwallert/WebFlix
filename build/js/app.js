
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
            });
    }

}());

(function () {

    'use strict';

    angular.module('webflixApp')

        .factory('Movie', function () {
            function Movie(data) {
                _.merge(this, {
                    title: '',
                    release_date: '',
                    genre_ids: [],
                    overview: '',
                    poster_path: '',
                    vote_average: '',
                    checkedIn: true
                }, data || {});
            }

            Movie.prototype = {
                shortDesc: function () {
                    return this.overview.substr(0, 25).replace(/\s$/, '') + '...';
                },
                checkInOut: function () {
                    if (this.checkedIn) {
                        alert('This movie is available...');
                        this.checkedIn = !confirm('Would you like to check it out?');
                    }
                    else {
                        alert('This movie is currently unavailable...');
                        this.checkedIn = confirm('Would you like to check it in?');
                    }
                }
            };

            return Movie;
        });
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

    Movies.$inject = ['Movie', '$http'];

    function Movies(Movie, $http) {

        var vm = this;

        vm.getMovies = getMovies;
        vm.makeMovies = makeMovies;
        vm.movies = [];


        function getMovies() {
            return $http.get('http://api.themoviedb.org/3/genre/18/movies?api_key=ff562fe235d88443c78581b04f7edb57')
                .then(function (res) {
                    return vm.makeMovies(res.data.results);
                }, function (err) {
                    console.log(err);
                    return 'Sorry, there was a problem getting movies.';
                });
        }


        function makeMovies(data) {
            _.each(data, function (l) {
                console.log(l);
                vm.movies.push(new Movie(l));
            });
            return vm.movies;
        }
    }

}());
