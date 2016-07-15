(function () {
 
  'use strict';
 
  angular.module('webflixApp.filters')
    .filter('niceDate', niceDate);
  
  function niceDate() {
    return function (date) {
      return moment(date).format('MMMM Do YYYY');
    };
  }
  
}());