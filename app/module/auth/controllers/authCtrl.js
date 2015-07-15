(function () {
    'use strict';

    angular
        .module('cpApp.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['Restangular', 'authService'];

    function AuthCtrl(Restangular, authService) {

        /* jshint validthis: true */
        var vm = this;

        vm.login = {};
        vm.submitLogin = submitLogin;

        activate();

        function activate() {

        }

        function submitLogin() {

            console.log(vm.login);

            Restangular.one('users/attempt_login').customPOST(vm.login).then(function(result) {

                authService.authorize(result);

                console.log(result);
                console.log("Object saved OK");
            }, function() {
                console.log("There was an error saving");
            });
            //path.attempt_login(vm.login);




        }
    }
})();
