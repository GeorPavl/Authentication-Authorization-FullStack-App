(function() {

    angular.module('app').directive('headerDirective', headerDirective);

    function headerDirective(authService) {
        
        return {
            restrict: 'E',
            templateUrl: 'app/_global/header-directive/header.tpl.html',
            replace: true,
            scope: {},
            link: function(scope, location) {
                
                scope.login = function() {
                    location.path('/login');
                };
                
                scope.logout = function() {
                    location.path('/logout');
                };

                scope.isLoggedIn = function() {
                    return authService.isLoggedIn();
                };
                
            }
        };

    }

})();