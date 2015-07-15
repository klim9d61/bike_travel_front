(function () {
    'use strict';

    angular
        .module('cpApp.reviews')
        .controller('ReviewCategoriesCtrl', ReviewCategoriesCtrl);

    ReviewCategoriesCtrl.$inject = ['$stateParams','Restangular'];

    function ReviewCategoriesCtrl($stateParams, Restangular) {

        /* jshint validthis: true */
        var vm = this;

        vm.add = {};
        vm.edit = {};
        vm.submitAdd = submitAdd;
        vm.submitEdit = submitEdit;

        activate();

        function activate() {
            Restangular.one('review_categories', $stateParams.catID).get().then(function(result) {
                vm.edit = result;
            });
        }

        function submitAdd() {
            console.log('adding...');
            var route = Restangular.all('review_categories');
            route.post(vm.add);
        }

        function submitEdit() {
            vm.edit.put();
        }


    }
})();
