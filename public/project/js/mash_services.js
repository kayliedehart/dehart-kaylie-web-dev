/**
 * Created by kayliedehart on 12/13/16.
 */
(function(){
    angular.module("MASHServices", [])
        .factory("MASHServices", mashServices);

    function  mashServices($http) {
        var mashServices = {
            constructScenario: constructScenario,
            deleteUserById: deleteUserById,
            readAllUsers: readAllUsers,
            readUserById: readUserById,
            updateUserById: updateUserById
        };
        return mashServices;

        function constructScenario(callback) {
            $http.get('/rest/userProfile')
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