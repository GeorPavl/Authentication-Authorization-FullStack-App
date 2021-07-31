(function() {

    angular.module('app', ['ngRoute']).config(config);

    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller:  'homeController'
            });

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

    }

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('app').run(run);

    function run($rootScope) {

        $rootScope.authenticated = false;
        $rootScope.principal = {};
        $rootScope.baseUrl = "http://localhost:8081";

    }

    run.$inject = ['$rootScope'];

})();
