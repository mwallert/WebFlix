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
                    checkedIn: true,
                    webflixRating: 0
                }, data || {});
            }

            Movie.prototype = {

                shortDesc: function () {
                    return this.overview.substr(0, 50).replace(/\s$/, '') + '...';
                },

                posterUrl: function () {
                    return 'https://image.tmdb.org/t/p/w370' + this.poster_path;
                }
            };

            return Movie;
        });
}());
