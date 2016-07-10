
(function () {

    'use strict';

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
                    movie: function (movies, MoviesService, $stateParams) {
                        return MoviesService.find($stateParams.movie_title);
                    }
                }
            });

    }

}());
