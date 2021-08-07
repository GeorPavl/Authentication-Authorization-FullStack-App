(function() {

    angular.module('app.us').factory('userFactory', userFactory);

    function userFactory($resource, $rootScope, headerService, userConsts) {
        
        return $resource(null, null, {
            'list': {
                url: $rootScope.baseUrl + userConsts.listUrl,
                method: 'GET',
                isArray: true,
                headers: headerService.getHeadersWithAuth()
            },
            'get': {
                url: $rootScope.baseUrl + userConsts.getUrl,
                method: 'GET',
                headers: headerService.getHeadersWithAuth()
            },
            'save': {
                url: $rootScope.baseUrl + userConsts.saveUrl,
                method: 'POST',
                headers: headerService.getHeadersWithAuth()
            },
            'delete': {
                url: $rootScope.baseUrl + userConsts.deleteUrl,
                method: 'DELETE',
                headers: headerService.getHeadersWithAuth()
            }
        });

    }

    userFactory.$inject = ['$resource', '$rootScope', 'headerService', 'userConsts']

})();