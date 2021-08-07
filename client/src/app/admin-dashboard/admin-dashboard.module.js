(function() {

    angular.module('app.admin-dashboard', []).config(config);

    function config($stateProvider) {

        $stateProvider.state({
            name: 'app.admin-dashboard',
            url: '/admin',
            templateUrl: './src/app/admin-dashboard/admin-dashboard.tpl.html',
            abstract: true,
            controller: 'adminDashboardController'  
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.index',
            url: '/index',
            templateUrl: './src/app/admin-dashboard/admin-dashboard-index.tpl.html'
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.user-list',
            url: '/user-list',
            templateUrl: './src/app/us/user-list.html',
            controller: 'userListController',
            data: {
                isArray: true
            }
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.user-view',
            url: '/user-view/:id',
            templateUrl: './src/app/us/user-view.html',
            controller: 'userViewController',
            params: {
                id: {dynamic: true}
            }
        });

    }

    config.$inject = ['$stateProvider'];

})();