(function() {

    angular.module('app.examples', []).config(config);

    function config($stateProvider) {

        $stateProvider.state({
            name: 'app.examples',
            url: '/examples',
            templateUrl: './src/app/_global/examples/examples.html',
            controller: 'examplesController'
        });
        
    }

})();