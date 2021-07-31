(function() {

    angular.module('app').config(config);

    function config($routeProvider) {

        $routeProvider
            .when("/user-view/:id", {
                templateUrl: 'app/user/user-view.html',
                controller: 'userViewController',
            });
        
    }

    config.$inject = ['$routeProvider'];

})();