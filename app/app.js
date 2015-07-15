/**
 * Created by klim on 3/23/15.
 */

(function () {
    'use strict';

    angular.module('cpApp', [
        // Angular Modules


        // Custom Modules
        'cpApp.auth',
        'cpApp.travels',
        'cpApp.reviews',
        'cpApp.main',
        'cpApp.admin',

        // 3rd Party Modules
        'ui.bootstrap',
        'restangular',
        'ui.router'

    ]).config(['$stateProvider', '$urlRouterProvider', '$compileProvider', 'RestangularProvider', function (
        $stateProvider,
        $urlRouterProvider,
        $compileProvider,
        RestangularProvider
    ) {

        //RestangularProvider.setBaseUrl('https://hidden-reef-3341.herokuapp.com/api');
        RestangularProvider.setBaseUrl('http://bike-travel-dev.com:3000/api/v1');
        //'http://127.0.0.1:5000/todo/api/v1.0');
        // Note that we run everything on the localhost

        $urlRouterProvider.otherwise('/home');

        // Angular 1.3 Disabling scope annotations
        $compileProvider.debugInfoEnabled(false);

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: '/build/main/views/home.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('login', {
                url: '/login',
                templateUrl: '/build/auth/views/login.html',
                controller: 'AuthCtrl as vm'
            })
            .state('travels', {
                url: '/travel-categories/:catID/travels',
                templateUrl: '/build/travels/views/travels.html',
                controller: 'TravelsCtrl as vm'
            })
            .state('show-travel', {
                url: '/travel-categories/:catID/travels/:ID',
                templateUrl: '/build/travels/views/show-travel.html',
                controller: 'TravelsCtrl as vm'
            })
            .state('travelCategories', {
                url: '/travel-categories',
                templateUrl: '/build/travels/views/travel_categories.html',
                controller: 'TravelCategoriesCtrl as vm'
            })
            .state('add-travel-category', {
                url: '/travel-categories/add',
                templateUrl: '/build/travels/views/add_travel_category.html',
                controller: 'TravelCategoriesCtrl as vm'
            })
            .state('delete-travel-category', {
                url: '/travel-categories/:catID/delete',
                controller: 'TravelCategoriesCtrl as vm'
            })
            .state('edit-travel-category', {
                url: '/travel-categories/:catID/edit',
                templateUrl: '/build/travels/views/edit_travel_category.html',
                controller: 'TravelCategoriesCtrl as vm'
            })

            // REVIEW PAGES =================================
            .state('reviewCategories', {
                url: '/review-categories',
                templateUrl: '/build/travels/views/review_categories.html',
                controller: 'ReviewCategoriesCtrl as vm'
            })
            .state('add-review-category', {
                url: '/review-categories/add',
                templateUrl: '/build/reviews/views/add_review_category.html',
                controller: 'ReviewCategoriesCtrl as vm'
            })
            .state('edit-review-category', {
                url: '/review-categories/:catID/edit',
                templateUrl: '/build/reviews/views/edit_review_category.html',
                controller: 'ReviewCategoriesCtrl as vm'
            })

            // ADMIN PAGES =================================
            .state('admin_categories', {
                url: '/admin/categories',
                templateUrl: '/build/admin/views/categories.html',
                controller: 'CategoriesCtrl as vm'
            });

    }]);
})();