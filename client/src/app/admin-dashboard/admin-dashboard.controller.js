(function() {

    angular.module('app.admin-dashboard').controller('adminDashboardController', adminDashboardController);

    function adminDashboardController($rootScope, $scope, $state, userService) {

        $scope.message = "This is admin dashboard";

        init();

        function init() {
            console.log($scope.message);
        }

    }

})();