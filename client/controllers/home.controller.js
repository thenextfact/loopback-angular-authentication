angular
    .module('app')
    .controller('HomeController', ['$scope', '$state', 'authService', '$location', function ($scope, $state, authService, $location) {
        $scope.logout = function() {
            authService.logout().then(function (response) {
                $location.path('/login');
                console.log(response);
            }, function (err) {
                alert(err.data.error.message);
                console.log(err);
            });
        }
    }]);
