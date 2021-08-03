(function() {

    angular.module('app.admin-dashboard', []).config(config);

    function config($stateProvider) {

        $stateProvider.state({
            name: 'app.admin-dashboard',
            templateUrl: 'app/admin-dashboard/admin-dashboard.tpl.html',
            abstract: true,
            controller: 'adminDashboardController'  
        });

        $stateProvider.state({
            name: 'app.admin-dashboard.index',
            url: '/admin',
            templateUrl: 'app/admin-dashboard/admin-dashboard-index.tpl.html'
        });

    }

    config.$inject = ['$stateProvider'];

})();