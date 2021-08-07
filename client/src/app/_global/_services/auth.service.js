(function() {

    angular.module('app.global').service('authService', authService); 

    function authService($http, $rootScope, $location, headerService) {

        return {
            authenticate: authenticate,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getLoggedInUser: getLoggedInUser
        };

        function authenticate(credentials, callback) {
            
            $http.get($rootScope.baseUrl + '/login', {
                headers: headerService.setHeadersForLogin(credentials)
            })
            .then(function(response) {
                if (response.data) {
                    $rootScope.authenticated = true;
                    $rootScope.user = response.data;
                    $rootScope.user.token = response.data.token;
                } else {
                    $rootScope.authenticated = false;
                    $location.path("/");
                }
                callback && callback();
            }, function() {
                $rootScope.authenticated = false;
                callback && callback();
            });

        }

        function logout() {
            
            $http.post($rootScope.baseUrl + '/logout', {}).finally(function() {
                $rootScope.authenticated = false;
                $location.path("/");
            });

        }

        function isLoggedIn() {
            if ($rootScope.authenticated) {
                return true;
            } 
            else {
                return false;
            }
        }

        function getLoggedInUser() {
            if ($rootScope.user) {
                return $rootScope.user;
            } 
            else {
                return {};
            }
        }
        
    }

    authService.$inject = ['$http', '$rootScope', '$location', 'headerService'];
    
})();