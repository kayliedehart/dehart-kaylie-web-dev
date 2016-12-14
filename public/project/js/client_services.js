/**
 * Created by kayliedehart on 12/13/16.
 */
(function(){
    angular.module("ClientServices", [])
        .factory("ClientServices", clientServices);

    function  clientServices($http) {
        var userService = {
            createUser: createUser,
            deleteUserById: deleteUserById,
            readAllUsers: readAllUsers,
            readUserById: readUserById,
            updateUserById: updateUserById
        };
        return userService;
        
        function createUser(callback) {
            $http.post('/rest/userProfile', user)
                .success(callback);
        }

        function deleteUserById(callback){
            $http.delete('/rest/userProfile/:id')
                .success(callback);
        }

        function  readAllUsers(callback) {
            $http.get('/rest/userProfile')
                .success(callback);
        }

        function readUserById(callback){
            $http.get('/rest/userProfile/:id')
                .success(callback);
        }

        function updateUserById(callback){
            $http.put('/rest/userProfile/:id')
                .success(callback);
        }
    }
})();