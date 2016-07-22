﻿(function () {
  'use strict';

  angular.module('webflixApp', [
    'ui.router',
    'webflixApp.filters'
  ])
    .config(config);

  function config($stateProvider, $urlRouterProvider, $httpProvider, storageProvider) {
    
    storageProvider.setPrefix('webflixApp');

    /**
     * Default state
     */
    $urlRouterProvider.otherwise('/movies');

    /**
     * State provider
     */

    // TODO: Use ui-router resolve function to initialize movies. Will make movies array available in child states.
    // TODO: Make a child state for individual movie view.
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'build/partials/movies/movies.html',
        controller: 'MoviesController',
        controllerAs: 'moviesCtl',
        resolve: {
          allMovies: function (MoviesService) {
            return MoviesService.getMovies();
          }
        }
      });
  }

}());
