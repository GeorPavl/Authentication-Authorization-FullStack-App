(function() {

    angular.module('app.home').service('homeService', homeService);

    function homeService(homeFactory) {
        
        return {
            getUser: getUser 
        }

        function getUser(id) {
            return homeFactory.get({id}, null);
        }
    }

    homeService.$inject = ['homeFactory'];

})();