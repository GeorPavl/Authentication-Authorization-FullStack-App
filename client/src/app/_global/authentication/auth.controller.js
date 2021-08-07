(function() {

    angular.module('app.global').controller('authController', authController);

    function authController($rootScope, $scope, $location, authService, $state) {

        $scope.credentials = {};

        $scope.resetForm = function() {
            $scope.credentials = null;
        }

        $scope.loginUser = function() {
            authService.authenticate($scope.credentials, function() {
                if ($rootScope.authenticated) {
                    if ($rootScope.user.role === "ROLE_ADMIN") {
                        $state.go('app.admin-dashboard.index');
                    } else {
                        $state.go('app.user-dashboard.index')
                    }
                    $scope.loginerror = false;
                } else {
                    $state.go('app.global.login');
                    $scope.loginerror = true;
                }
            });
        };

        $scope.logout = function() {
            authService.logout();
        }

    }

    authController.$inject = ['$rootScope', '$scope', '$location', 'authService', '$state'];

})();