(function() {

    angular.module('app').controller('logoutController', logoutController);

    function logoutController(authService) {

        init();
        
        function init() {
            authService.logout();
        }

    };

})();