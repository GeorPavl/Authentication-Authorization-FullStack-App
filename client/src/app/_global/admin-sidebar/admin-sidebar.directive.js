(function() {

    angular.module('app.global').directive('adminSidebar', adminSidebar);

    function adminSidebar() {
        
        return {
            restrict: 'E',
            templateUrl: './src/app/_global/admin-sidebar/admin-sidebar.tpl.html',
            replace: true,
            scope: {},
            link: function(scope, state) {
                
            }
        };

    }

    adminSidebar.$inject = [];

})();