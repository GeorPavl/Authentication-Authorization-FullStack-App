(function() {

    angular.module('app.home').controller('homeController', homeController);

    function homeController($scope, homeService, $state, $location) {

        $scope.message;
        $scope.user = {};

        init();

        function init() {
            
            console.log('Loaded.');
            $scope.message = 'Hello World!!!';
            
        }

        $scope.login = function() {
            $state.go('app.global.login');
            //$location.path("/login");
        }

        $scope.goToExamples = function() {
            $state.go('app.examples');
        }
    }

    homeController.$inject = ['$scope', 'homeService', '$state', '$location'];
    
})();