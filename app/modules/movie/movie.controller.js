
(function () {

    'use strict';

    angular.module('webflixApp')
        .controller('MovieController', MovieController);


    function MovieController() {

        var vm = this;
        vm.test = 'testing testing';
    }

}());
