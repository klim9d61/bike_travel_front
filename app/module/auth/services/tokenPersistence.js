(function() {
    'use strict';

    angular.module("cpApp.auth")
        .factory('tokenPersistence', tokenPersistence);

    function tokenPersistence() {

        return {

            persist: function(userId, token) {
                sessionStorage.setItem('cp.userId', userId);
                sessionStorage.setItem('cp.token', token);
            },

            clear: function() {
                sessionStorage.clear()
            },

            retrieve: function() {
                var userId = sessionStorage.getItem('cp.userId');
                if (!userId) {
                    return null;
                }
                return {
                    userId: userId,
                    token: sessionStorage.getItem('cp.token'),
                    hello: 'sessionRetrieve'
                };
            }
        };
    }

})();
