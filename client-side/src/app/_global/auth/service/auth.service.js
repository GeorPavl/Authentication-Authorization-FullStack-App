(function() {

    angular.module('app').service('authService', authService); 

    function authService($http, $rootScope, $location, headerService) {

        return {
            authenticate: authenticate,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getLoggedInUser: getLoggedInUser
        };

        function authenticate(credentials, callback) {
            
            $http.get('http://localhost:8081/login', {
                headers: headerService.setHeadersForLogin(credentials)
            })
            .then(function(response) {
                console.log(response);
                if (response.data) {
                    $rootScope.authenticated = true;
                    $rootScope.principal = response.data;
                    console.log($rootScope.principal);
                    console.log($rootScope.authenticated);
                } else {
                    $rootScope.authenticated = false;
                    console.log(response);
                }
                callback && callback();
            }, function() {
                $rootScope.authenticated = false;
                callback && callback();
            });

        }

        function logout() {
            
            $http.post('http://localhost:8081/logout', {}).finally(function() {
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
            if ($rootScope.principal) {
                return $rootScope.principal;
            } 
            else {
                return {};
            }
        }
        
    }
    
})();