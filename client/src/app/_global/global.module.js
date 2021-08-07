(function() {

    angular.module('app.global', []).config(config);

    function config($stateProvider) {

        $stateProvider.state({
            name: 'app.global',
            abstract: true
        });

        $stateProvider.state({
            name: 'app.global.login',
            url: '/login',
            templateUrl: './src/app/_global/authentication/login.html',
            controller: 'authController'
        });

        $stateProvider.state({
            name: 'app.global.logout',
            url: '/logout',
            templateUrl: './src/app/_global/authentication/login.html',
            controller: 'authController'
        });

    }

    config.$inject = ['$stateProvider'];

})();