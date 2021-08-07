(function() {

    angular.module('app.admin-dashboard').controller('adminDashboardController', adminDashboardController);

    function adminDashboardController($scope) {

        $scope.message = "This is admin dashboard";

        init();

        function init() {

        }

    }

})();