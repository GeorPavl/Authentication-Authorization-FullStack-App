(function() {

    angular.module('app.user-dashboard').controller('userDashboardController', userDashboardController);

    function userDashboardController($rootScope, $scope) {

        $scope.user = $rootScope.user;

    }

    userDashboardController.$inject = ['$rootScope', '$scope'];

})();