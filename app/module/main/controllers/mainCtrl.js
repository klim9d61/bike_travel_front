(function () {
    'use strict';

    angular
        .module('cpApp.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['Restangular'];

    function MainCtrl(Restangular) {

        /* jshint validthis: true */
        var vm = this;

        //Restangular.all('travel_categories.json').getList().then(function(result) {
        //    vm.travelCategories = result;
        //    console.log(result);
        //
        //});

        activate();

        function activate() {
            //vm.companies = ['LE', 'Yopeso', 'Endava'];
        }

        //console.log(vm.companies);
    }
})();
