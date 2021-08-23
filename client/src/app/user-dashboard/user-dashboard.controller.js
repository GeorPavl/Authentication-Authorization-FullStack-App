(function() {

    angular.module('app.user-dashboard').controller('userDashboardController', userDashboardController);

    function userDashboardController($scope, $state, authService) {

        $scope.user = authService.getLoggedInUser();
        $scope.welcomeMessage = "Welcome to dashboard's home page";

        $scope.goToProfile = function() {
            $state.go('app.user-dashboard.profile', {id: $scope.user.id}, {reload: true});
        }
    }

})();