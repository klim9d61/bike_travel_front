(function () {
    'use strict';

    angular
        .module('cpApp.travels')
        .controller('TravelsCtrl', TravelsCtrl);

    TravelsCtrl.$inject = ['$stateParams', 'Restangular'];

    function TravelsCtrl($stateParams, Restangular) {

        /* jshint validthis: true */
        var vm = this;


        Restangular.one('travel_categories', $stateParams.catID).one('travels.json').getList().then(function(result) {

        //Restangular.all('travel_categories/'+$stateParams.catID+'/travels.json').getList().then(function(result) {
            vm.travels = result;
        });

        activate();

        function activate() {
            console.log($stateParams.catID);
        }


    }
})();
