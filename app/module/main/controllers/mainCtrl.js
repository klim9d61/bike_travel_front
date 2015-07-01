(function () {
    'use strict';

    angular
        .module('cpApp.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['Restangular'];

    function AuthCtrl(Restangular) {

        /* jshint validthis: true */
        var vm = this;

        //vm.companies = [];

        Restangular.all('travels.json').getList().then(function(result) {
            vm.tasks = result;

        });

        activate();

        function activate() {
            vm.companies = ['LE', 'Yopeso', 'Endava'];
        }

        console.log(vm.companies);
    }
})();
