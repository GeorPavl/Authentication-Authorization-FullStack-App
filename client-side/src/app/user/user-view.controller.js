(function() {
    
    angular.module('app').controller('userViewController', userViewController);

    function userViewController($rootScope, $location, $scope, $routeParams, $http, headerService) {

        $scope.user = {};

        init();

        function init() {
            if ($routeParams.id) {
                $http({
                    url: $rootScope.baseUrl + "/user/get", 
                    method: "GET",
                    params: {id: $routeParams.id},
                    headers: headerService.getHeadersWithAuth()
                })
                .then(function(successCallback) {
                    $scope.user = successCallback.data;
                })
                .catch(function(errorCallback) {
                    console.log(errorCallback);
                });

            }
        }
    }

})();