(function() {

    angular.module('app', [
        'ui.router',
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngMessages',
        'chart.js',
        'app.global',
        'app.home',
        'app.admin-dashboard',
        'app.user-dashboard'
    ]).config(config);

    function config($stateProvider, $locationProvider) {

        $stateProvider.state({
            name: 'app',
            abstract: true
        });

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

    }

    config.$inject = ['$stateProvider', '$locationProvider'];

    angular.module('app').run(run);

    function run($rootScope) {

        $rootScope.baseUrl = "http://localhost:8081";
        
        $rootScope.authenticated = false;
        $rootScope.user = {};
        
    }

    run.$inject = ['$rootScope'];


})();