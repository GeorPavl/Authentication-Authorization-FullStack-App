(function() {

    angular.module('app.us').controller('userListController', userListController);

    function userListController($scope, $state, userService) {

        $scope.users = [];

        init();

        function init() {

            getUsers();

        }

        function getUsers() {
            userService.getUsers().$promise
                .then(function(response) {
                    $scope.users = response;
                    console.log($scope.users);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        $scope.viewUser = function(id) {
            $state.go('app.admin-dashboard.user-view', {id: id});
        }

        $scope.deleteUser = function(id) {
            var result = confirm("Are you sure?");
            if (result) {
                userService.deleteUser(id).$promise
                .then(function(response) {
                    console.log("delete done");
                    $state.go($state.current, {}, {reload: true});
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
        
    }

})();