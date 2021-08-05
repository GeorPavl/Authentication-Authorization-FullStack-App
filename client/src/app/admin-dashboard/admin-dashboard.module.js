(function() {

    angular.module('app.admin-dashboard', []).config(config);

    function config($stateProvider) {

        $stateProvider.state({
            name: 'app.admin-dashboard',
            url: '/admin',
            templateUrl: 'app/admin-dashboard/admin-dashboard.tpl.html',
            abstract: true,
            controller: 'adminDashboardController'  
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.index',
            url: '/index',
            templateUrl: 'app/admin-dashboard/admin-dashboard-index.tpl.html'
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.user-list',
            url: '/user-list',
            templateUrl: 'app/admin-dashboard/admin-dashboard-user-list.tpl.html'
        });

    }

    config.$inject = ['$stateProvider'];

})();