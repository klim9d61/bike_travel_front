(function() {
    "use strict";

    angular.module('cpApp.main').directive('mainMenu', mainMenu);

    function mainMenu() {
        return {
          // scope: true,
          restrict: "E",
          templateUrl: "/build/module/main/views/main_menu.html",
          controller: controller
        };
    }

    controller.$inject = ['$scope', '$location', '$routeParams', 'config', 'userService'];

    function controller($scope, $location, $routeParams, config, userService) {
        $scope.config = config;
        $scope.isActive = isActive;
        $scope.isHome = isHome;
        $scope.amount = 0;
        $scope.isDropdown = isDropdown;
        $scope.isActiveCompany = isActiveCompany;

        if (config.currentUserId) {
            getCompanies()
        }
        $scope.$on('login', function() {
            getCompanies()
        });

        function isActive(route) {
            return $location.path().indexOf(route) > -1;
        }

        function isActiveCompany(id) {
            if ($routeParams.id) {
                return $routeParams.id == id;
            } else {
                return false;
            }
        }

        function isDropdown() {
            return $scope.amount > 3;
        }

        function isHome() {
            return $location.path() == "/";
        }

        function getCompanies() {
            $scope.companiesAndParticipants = userService.getUserCompanies(config.currentUserId);
            $scope.companiesAndParticipants.$promise.then(function() {
                $scope.amount = $scope.companiesAndParticipants.length;
            });
        }
    }
})();




