(function() {

    angular.module('app.global').directive('userSidebar', userSidebar);

    function userSidebar() {
        
        return {
            restrict: 'E',
            templateUrl: 'app/_global/user-sidebar/user-sidebar.tpl.html',
            replace: true,
            scope: {},
            link: function(scope, state) {
                
                scope.logout = function() {
                    state.go('app.global.logout');
                };
                
            }
        };

    }

    userSidebar.$inject = [];

})();