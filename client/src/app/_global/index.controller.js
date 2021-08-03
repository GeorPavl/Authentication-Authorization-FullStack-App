(function() {

    angular.module('app.global').controller('indexController', indexController);

    function indexController($rootScope, $scope) {
        $scope.isAuthenticated = $rootScope.authenticated;
    }

    indexController.$inject = ['$rootScope', '$scope'];

})();