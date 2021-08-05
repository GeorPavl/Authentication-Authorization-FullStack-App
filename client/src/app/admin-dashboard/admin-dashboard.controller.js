(function() {

    angular.module('app.admin-dashboard').controller('adminDashboardController', adminDashboardController);

    function adminDashboardController($scope, $state, userService) {

        $scope.users = [];

        init();

        function init() {
            getUsers();
        }

        function getUsers() {
            userService.getUsers().$promise
                .then(function(response) {
                    $scope.users = response;
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        $scope.deleteUser = function(id) {
            var result = confirm("Are you sure?");
            if (result) {
                userService.deleteUser(id).$promise
                .then(function(response) {
                    console.log("delete done");
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }

    }

    adminDashboardController.$inject = ['$scope', '$state', 'userService'];

})();