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

        $stateProvider.state({
            name: 'app.user-dashboard.profile',
            url: '/profile/:id',
            templateUrl: './src/app/us/user-view.html',
            controller: 'userViewController',
            params: {
                id: {dynamic: true}
            }
        });

        $stateProvider.state({
            name: 'app.user-dashboard.test',
            url: '/test',
            templateUrl: './src/app/user-dashboard/test.html',
            controller: 'testController'
        });

    }

    config.$inject = ['$stateProvider'];

})();