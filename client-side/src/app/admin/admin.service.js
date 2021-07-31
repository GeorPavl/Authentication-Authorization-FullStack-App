(function() {

    angular.module('app').service('adminService', adminService);

    function adminService($rootScope, $http, headerService, adminConsts) {

        return {
            getUsers: getUsers
        };

        function getUsers() {
            
            return  $http.get($rootScope.baseUrl + adminConsts.list, {
                        headers: headerService.getHeadersWithAuth()
                    })
                    .then(function(response) {
                        console.log(response.data);
                        return response.data;
                    }, function(response) {
                        console.log(response);
                    });
            
        }

    }

    adminService.$inject = ['$rootScope', '$http', 'headerService', 'adminConsts'];

})();