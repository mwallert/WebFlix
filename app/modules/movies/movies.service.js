
(function () {

    'use strict';

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

}());
