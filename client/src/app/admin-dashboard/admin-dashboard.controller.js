(function() {

    angular.module('app.admin-dashboard').controller('adminDashboardController', adminDashboardController);

    function adminDashboardController($scope) {
        $scope.contacts = [
            {
                id: 1,
                name: "Giorgos"
            }
        ]
    }

    adminDashboardController.$inject = ['$scope'];

})();