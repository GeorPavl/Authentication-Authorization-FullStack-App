(function() {

    angular.module('app').service('headerService', headerService);

    function headerService($rootScope) {

        return {
            getHeadersWithAuth: getHeadersWithAuth,
            setHeadersForLogin: setHeadersForLogin
        }

        function getHeadersWithAuth() {
            var principal = $rootScope.principal
            var headers = {};

            if (principal) {
                headers = {
                    Authorization: "Bearer " + principal.token
                };
            }

            return headers;
        }

        function setHeadersForLogin(credentials) {
            var headers = {
                authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)        
            };

            return headers;
        }

    }

})();