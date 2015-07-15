(function () {
    'use strict';

    angular
        .module('cpApp.admin')
        .controller('CategoriesCtrl', CategoriesCtrl);

    CategoriesCtrl.$inject = ['Restangular'];

    function CategoriesCtrl(Restangular) {

        /* jshint validthis: true */
        var vm = this;

        vm.deleteTravelCategory = deleteTravelCategory;
        vm.deleteReviewCategory = deleteReviewCategory;
        vm.changeVisible = changeVisible;

        activate();

        function activate() {
            Restangular.all('travel_categories').getList().then(function(result) {
                vm.travelCategories = result;
                console.log(result);
            });
            Restangular.all('review_categories').getList().then(function(result) {
                vm.reviewCategories = result;
                console.log(result);
            });
            //Restangular.all('travel_categories.json').getList().then(function(result) {
            //    vm.travelCategories = result;
            //    console.log(result);
            //});
        }

        function changeVisible(category) {
            console.log('change...');
            category.put();
        }

        function deleteTravelCategory(category) {
            category.remove()
        }

        function deleteReviewCategory(category) {
            category.remove()
        }

        //ui-sref="delete-review-category({ catID: {{category.id}} })"

    }
})();
