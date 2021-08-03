(function() {

    angular.module('app').controller('homeController', homeController);

    function homeController($rootScope, $scope, $location) {

        init();

        function init() {   
           // $location.path('/');
        }

        $scope.login = function() {
            $location.path('/login');
        }

    };

})();