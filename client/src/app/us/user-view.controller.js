(function() {

    angular.module('app.us').controller('userViewController', userViewController);

    function userViewController($scope, $state, userService) {

        $scope.user = {};

        $scope.isEditable = false;

        $scope.enabledOptions = [
            {
                title: 'Enabled',
                value: true
            },
            {
                title: 'Disabled',
                value: false
            }
        ];

        $scope.roleOptions = [
            {
                title: 'Administrator',
                value: 'ROLE_USER'
            },
            {
                title: 'User',
                value: 'ROLE_USER'
            }
        ];

        init();

        function init() {
            if ($state.params.id) {
                getUser($state.params.id);
                $scope.isEditable = true;
            }

        }

        function getUser(id) {
            userService.getUser(id).$promise
                .then(function(response) {
                    $scope.user = response;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        $scope.saveUser = function() {
            userService.saveUser($scope.user).$promise
                .then(function(response) {
                    $state.go($state.current, {id: response.id}, {reload: true});
                    console.log("success" + response);
                }).catch(function(error) {
                    console.log(error);
                });
        } 

    }

})();