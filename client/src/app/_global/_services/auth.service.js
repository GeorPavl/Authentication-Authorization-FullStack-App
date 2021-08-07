(function() {

    angular.module('app.global').service('authService', authService); 

    function authService($window, $http, $rootScope, $location, headerService) {

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
                    $window.localStorage.setItem('user',JSON.stringify(response.data));
                    $window.localStorage.setItem('authenticated', true);
                } else {
                    $window.localStorage.setItem('authenticated', false);
                    $location.path("/");
                }
                callback && callback();
            }, function() {
                $window.localStorage.setItem('authenticated', false);
                callback && callback();
            });

        }

        function logout() {
            
            $http.post($rootScope.baseUrl + '/logout', {}).finally(function() {
                $window.localStorage.setItem('authenticated', false);
                $window.localStorage.remove('user', false);

                $location.path("/");
            });

        }

        function isLoggedIn() {
            if (localStorage.getItem('authenticated')) {
                return true;
            } 
            else {
                return false;
            }
        }

        function getLoggedInUser() {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } 
            else {
                return {};
            }
        }
        
    }

    authService.$inject = ['$window', '$http', '$rootScope', '$location', 'headerService'];
    
})();