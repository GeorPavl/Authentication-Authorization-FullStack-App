(function() {

    angular.module('app').controller('userController', userController);

    function userController($rootScope, $scope) {

        $scope.user = {};

        init();

        function init() {

            $scope.user = $rootScope.principal;
            $scope.isEditable = false;
        }


    }

    userController.$inject = ['$rootScope', '$scope']

})();