(function () {
    'use strict';

    angular
        .module('cpApp.travels')
        .controller('TravelCategoriesCtrl', TravelCategoriesCtrl);

    TravelCategoriesCtrl.$inject = ['$stateParams','Restangular'];

    function TravelCategoriesCtrl($stateParams, Restangular) {

        /* jshint validthis: true */
        var vm = this;

        vm.add = {};
        vm.edit = {};
        vm.submitAdd = submitAdd;
        vm.submitEdit = submitEdit;

        activate();

        function activate() {
            Restangular.one('travel_categories', $stateParams.catID).get().then(function(result) {
                vm.edit = result;
            });
        }

        function submitAdd() {
            var posting = Restangular.all('travel_categories');
            posting.post(vm.add);
        }

        function submitEdit() {
            vm.edit.put();
        }


    }
})();
