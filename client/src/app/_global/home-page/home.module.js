(function() {

    angular.module('app.home', ['app']).config(config);

    function config($stateProvider) {
        
        $stateProvider.state({
            name: 'app.home',
            url: '/',
            controller: 'homeController',
            templateUrl: './src/app/_global/home-page/home.html',
            data: {

            },
            params: {

            },
            resolve: {
                
            }
        });
        
    }

})();