(function() {

    angular.module('app.global').directive('adminSidebar', adminSidebar);

    function adminSidebar() {
        
        return {
            restrict: 'E',
            templateUrl: 'app/_global/admin-sidebar/admin-sidebar.tpl.html',
            replace: true,
            scope: {},
            link: function(scope, state) {
                
                scope.logout = function() {
                    state.go('app.global.logout');
                };
                
            }
        };

    }

    adminSidebar.$inject = [];

})();