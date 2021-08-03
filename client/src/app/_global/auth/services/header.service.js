(function() {

    angular.module('app.global').service('headerService', headerService);

    function headerService($rootScope) {

        return {
            getHeadersWithAuth: getHeadersWithAuth,
            setHeadersForLogin: setHeadersForLogin
        }

        function getHeadersWithAuth() {
            var user = $rootScope.user
            var headers = {};

            if (user) {
                headers = {
                    Authorization: "Bearer " + user.token
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

    headerService.$inject = ['$rootScope'];

})();