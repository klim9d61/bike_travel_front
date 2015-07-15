(function () {
    'use strict';

    angular
        .module('cpApp.travels')
        .controller('TravelsCtrl', TravelsCtrl);

    TravelsCtrl.$inject = ['$stateParams', 'Restangular'];

    function TravelsCtrl($stateParams, Restangular) {

        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
            Restangular.one('travel_categories', $stateParams.catID).all('travels.json').getList().then(function(result) {
                vm.travels = result;
                vm.catID = $stateParams.catID;
            });
        }


    }
})();
