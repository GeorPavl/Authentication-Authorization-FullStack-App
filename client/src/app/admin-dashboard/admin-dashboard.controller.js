(function() {

    angular.module('app.admin-dashboard').controller('adminDashboardController', adminDashboardController);

    function adminDashboardController($rootScope, $scope, authService) {

        $scope.message = "This is admin dashboard";
        $scope.admin = authService.getLoggedInUser();

        init();

        function init() {
            
        }

    }

})();