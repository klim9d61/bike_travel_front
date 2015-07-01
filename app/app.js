/**
 * Created by klim on 3/23/15.
 */

(function () {
    'use strict';

    angular.module('cpApp', [
        // Angular Modules


        // Custom Modules
        'cpApp.auth',

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
        RestangularProvider.setBaseUrl('http://bike-travel-dev.com:3000/v1');
        //'http://127.0.0.1:5000/todo/api/v1.0');
        // Note that we run everything on the localhost

        $urlRouterProvider.otherwise('/');

        // Angular 1.3 Disabling scope annotations
        $compileProvider.debugInfoEnabled(false);

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('login', {
                url: '/login',
                templateUrl: '/build/auth/views/login.html',
                controller: 'AuthCtrl as vm'

            });

    }]);
})();