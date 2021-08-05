(function() {

    angular.module('app.us').service('userService', userService);

    function userService(userFactory) {
        return {
            getUsers: getUsers,
            getUser: getUser,
            saveUser: saveUser,
            deleteUser: deleteUser
        }

        function getUsers() {
            return userFactory.list({});
        }

        function getUser(id) {
            return userFactory.get({id}, null);
        }

        function saveUser(user) {
            return userFactory.save({}, user);
        }

        function deleteUser(id) {
            return userFactory.delete({id}, null);
        }
    }

    userService.$inject = ['userFactory'];

})();