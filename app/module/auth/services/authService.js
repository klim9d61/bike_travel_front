(function () {
    'use strict';

    angular.module("cpApp.auth").factory('authService', authService);

    authService.$inject = [
        '$http', 'config', 'tokenPersistence'
    ];

    function authService($http, config, tokenPersistence) {

        return {
            authorize: function(response) {
                config.currentUserId = response.user_id;
                config.authToken = response.auth_token;
                tokenPersistence.persist(response.user_id, response.auth_token);
                loadUser(tokenPersistence.retrieve());
                //$rootScope.$broadcast('loginPosted');
            },

            logout: function() {
                //service.postLogout({authToken: config.authToken});
                config.currentUserId = null;
                config.authToken = null;
                config.user = null;
                tokenPersistence.clear();
            },

            checkState: function() {
                var userAuthData = tokenPersistence.retrieve();
                if (userAuthData) {
                    loadUser(userAuthData);
                }
            }
        };

        function loadUser(userAuthData) {
            config.currentUserId = userAuthData.userId;
            config.authToken = userAuthData.token;
            $http.defaults.headers.common['Auth-Token'] = config.authToken;
            //config.user = userService.getUser(config.currentUserId);
            //currentUserService.setCurrentUserId();
            //$rootScope.$broadcast('login');
            return true;
            //return config.user;
        }
    }
})();

