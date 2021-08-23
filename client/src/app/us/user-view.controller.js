(function() {

    angular.module('app.us').controller('userViewController', userViewController);

    function userViewController($scope, $state, userService) {

        $scope.user = {};

        $scope.isEditable = false;
        $scope.isDisabled = true;
        $scope.confirmPassword = "";

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
                value: 'ROLE_ADMIN'
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
            } else {
                $scope.isDisabled = false;
            }

            findRole();
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
                
        function findRole() {
            if($scope.user.role == "ROLE_USER") {
                $scope.selectedValue = $scope.roleOptions[0];
            }else if ($scope.user.role == "ROLE_ADMIN") {
                $scope.selectedValue = $scope.roleOptions[1];
            }
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

        // Μέθοδος για τον έλεγχο αν τα δύο πεδία με password που δίνει ο χρήστης είναι ίδια
        $scope.checkPass = function() {
            if($scope.confirmPassword === $scope.user.password) {
                return true;
            }
            return false;
        }
        
    }

})();