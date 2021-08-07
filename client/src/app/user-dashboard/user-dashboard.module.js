(function() {

    angular.module('app.user-dashboard',[]).config(config);

    function config($stateProvider) {
        
        $stateProvider.state({
            name: 'app.user-dashboard',
            url: '/user',
            templateUrl: './src/app/user-dashboard/user-dashboard.html',
            abstract: true,
            controller: 'userDashboardController'
        });

        $stateProvider.state({
            name: 'app.user-dashboard.index',
            url: '/index',
            templateUrl: './src/app/user-dashboard/user-dashboard-index.html'
        });

    }

    config.$inject = ['$stateProvider'];

})();