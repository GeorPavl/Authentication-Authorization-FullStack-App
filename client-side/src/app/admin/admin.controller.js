(function() {

    angular.module('app').controller('adminController', adminController);

    function adminController($rootScope, $scope, $http, headerService, adminService, $location, $route) {

        $scope.users = [];
        $scope.admin = $rootScope.principal;

        init();

        function init() {
            adminService.getUsers()
                .then(function(response) {
                    $scope.users = response;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        
        $scope.viewUser = function(userId) {
            $location.path('/user-view/' + userId);
        }

        $scope.deleteUser = function(id) {
            var result = confirm("Are you sure?");
            if(result) {
                $http({
                    url: $rootScope.baseUrl + "/user/delete", 
                    method: "DELETE",
                    params: {id: id},
                    headers: headerService.getHeadersWithAuth()
                })
                .then(function(successCallback) {
                    console.log("success");
                    $route.reload();
                })
                .catch(function(errorCallback) {
                    console.log(errorCallback);
                });
            }

        }
    }

    adminController.$inject = ['$rootScope', '$scope', '$http', 'headerService', 'adminService', '$location', '$route'];

})();