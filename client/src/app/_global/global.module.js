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
            templateUrl: 'app/_global/auth/views/login.html',
            controller: 'authController'
        });

        $stateProvider.state({
            name: 'app.global.logout',
            url: '/logout',
            templateUrl: 'app/_global/auth/views/login.html',
            controller: 'logoutController'
        });

    }

    config.$inject = ['$stateProvider'];

})();