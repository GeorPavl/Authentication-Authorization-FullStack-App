(function() {

    angular.module('app.home', ['app']).config(config);

    function config($stateProvider) {
        
        $stateProvider.state({
            name: 'app.home',
            url: '/',
            controller: 'homeController',
            templateUrl: 'app/home/home.html',
            data: {

            },
            params: {

            },
            resolve: {
                
            }
        });
        
    }

    config.$inject = ['$stateProvider'];
    
})();