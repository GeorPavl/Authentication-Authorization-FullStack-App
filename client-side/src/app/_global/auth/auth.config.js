(function() {

    angular.module('app').config(config);

    function config($routeProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: 'app/_global/auth/view/login.html',
                controller: 'authController'
            })
            .when('/logout', {
                templateUrl: 'app/_global/auth/view/login.html',
                controller: 'logoutController'
            })
            .when('/admin', {
                templateUrl: 'app/admin/admin-dashboard.html',
                controller: 'adminController'
            })
            .when('/user', {
                templateUrl: 'app/user/user-view.html',
                controller: 'userController'
            });
            
    };

})();