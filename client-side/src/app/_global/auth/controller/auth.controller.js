(function() {

    angular.module('app').controller('authController', authController);

    function authController($rootScope, $scope, $location, authService) {

        $scope.credentials = {};

        $scope.resetForm = function() {
            $scope.credentials = null;
        }

        $scope.loginUser = function() {
            authService.authenticate($scope.credentials, function() {
                if ($rootScope.authenticated) {
                    if ($rootScope.principal.role === "ROLE_ADMIN") {
                        $location.path("/admin");
                    } else {
                        $location.path('/user-view/' + $rootScope.principal.id);
                    }
                    $scope.loginerror = false;
                } else {
                    $location.path("/login");
                    $scope.loginerror = true;
                }
            });
        };

    }

})();