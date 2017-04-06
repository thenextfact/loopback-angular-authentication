angular
    .module('app')
    .controller('LoginController', ['$scope', '$state', 'authService', '$location', function ($scope, $state, authService, $location) {
        $scope.login = function () {
            authService.login(this.username, this.password).then(function (response) {
                $location.path('/home');
                console.log(response);
            }, function (err) {
                alert(err.data.error.message);
                console.log(err);
            });
        };
    }]);
