(function() {

    angular.module('app.home').factory('homeFactory', homeFactory);

    function homeFactory($rootScope, $resource, homeConsts, headerService) {

        return $resource(null, null, {
            'get': {
                url: $rootScope.baseUrl + homeConsts.getUrl,
                method: 'GET',
                headers: headerService.getHeadersWithAuth()
            }
        });
        
    }

    homeFactory.$inject = ['$rootScope', '$resource', 'homeConsts', 'headerService'];

})();