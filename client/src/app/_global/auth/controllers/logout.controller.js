(function() {

    angular.module('app.global').controller('logoutController', logoutController);

    function logoutController(authService) {

        init();
        
        function init() {

            authService.logout();
        }

    }

    logoutController.$inject = ['authService'];

})();