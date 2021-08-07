(function() {

    angular.module('app.global').directive('headerDirective', headerDirective);

    function headerDirective(authService) {
        
        return {
            restrict: 'E',
            templateUrl: './src/app/_global/header-directive/header.html',
            replace: true,
            scope: {},
            link: function(scope, state) {
                
                scope.logout = function() {
                    state.go('app.global.logout');
                };
                
            }
        };

    }

    headerDirective.$inject = ['authService'];

})();