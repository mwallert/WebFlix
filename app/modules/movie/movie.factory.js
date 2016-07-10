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
