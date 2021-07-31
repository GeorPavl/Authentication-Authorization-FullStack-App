(function() {

    angular.module('app').controller('indexController', indexController);

    function indexController($scope, $rootScope, $location) {

        if($rootScope.authenticated) {
            $scope.showHeaderAndSideBar = true;
        } else {
            $scope.showHeaderAndSideBar = false;
        }

        $scope.login = function() {
            $location.path('/login');
        }

    }

    indexController.$inject = ['$scope', '$rootScope', '$location'];
    
})();