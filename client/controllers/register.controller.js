angular
  .module('app')
  .controller('RegisterController', ['$scope', '$state', 'authService', '$location', function($scope, $state, authService, $location) {
        $scope.register = function() {
            authService.register(this.email, this.password).then(function (response) {
                console.log(response);
                $location.path('/login');
            }, function (err) {
                console.log(err);
                alert(err.data.error.message);
            });
        }
  }]);