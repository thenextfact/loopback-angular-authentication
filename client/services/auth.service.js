(function () {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['User', '$rootScope'];

    function authService(User, $rootScope) {
        var service = {
            login: login,
            logout: logout,
            register: register,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser
        };
        return service;

        function login(email, password) {
            return User
                .login({ email: email, password: password })
                .$promise;
        }

        function logout() {
            return User
                .logout()
                .$promise;
        }

        function register(email, password) {
            return User
                .create({
                    email: email,
                    password: password
                })
                .$promise;
        }

        function isAuthenticated() {
            return User.isAuthenticated();
        }

        function getCurrentUser() {
            return User.getCurrent();
        }
    }
})();