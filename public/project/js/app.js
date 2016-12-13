(function() {
    var app = angular.module("MASHApp", ["ngRoute", 'services']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/app,', {
                templateUrl: "../html/login.html",
                controller:'LoginController'
            })
            .when('/login', {
                templateUrl: "../html/login.html",
                controller:'LoginController'
            })
            .when('/register', {
                templateUrl: "../html/register.html",
                controller:'RegisterController'
            })
            .when('/details', {
                templateUrl: "../html/details.html",
                controller:'ProfileController'
            })
            .when('/mash', {
                templateUrl: "../html/mash.html",
                controller:'MASHController'
            })
            .otherwise({
                template: 'does not exist'
            });
    });

    app.controller('LoginController',
        function LoginController($scope, $http, services) {
            $scope.validate = function (user) {
                $http.get('/rest/userProfile/:name:password', user.username, user.password)
                    .then(function(response) {
                        $scope.id = response._id;
                    }, function (response) {
                    $scope.window.alert("Invalid login");
                });
            };
        }
    );

    app.controller('RegisterController',
        function RegisterController($scope, $http, services) {

            $scope.location = ['Boston, MA', 'San Fransisco, CA', 'New York City, NY', 'Washington, DC', 'Denver, CO'];
            $scope.major = ['Computer Science', 'Political Science', 'Physics', 'Engineering', 'English', 'Art', 'History'];
            $scope.gender = ['Female', 'Male', 'Non-Binary', 'Other'];
            $scope.orientation = ['Straight', 'Gay', 'Bisexual', 'Pansexual', 'Asexual'];

            $scope.userInfo = function (user) {
                $http.post(BASE_URL + '/rest/userProfile', user)
                    .then(function success(response){
                        $scope._id = response._id;
                    }, function failure(response) {

                });
            };
        }
    );

    app.controller('ProfileController',
        function ProfileController($scope, $http, services) {

            $scope.profileLoad = function (){
                $http.get(BASE_URL + 'rest/userProfile/:id')
                    .then(function success(response){
                        $scope.user = response;
                    }, function failure(response) {

                    });
            };

            $scope.deleteConfirm = function () {
                $scope.window.alert("Are you sure you want to delete your profile?");
                $http.delete(BASE_URL + 'rest/userProfile/:id')
                    .then(function success(response){
                        $scope.user = false;
                    }, function failure(response) {

                    });
            };
        }
    );

    app.controller('MASHController',
        function MASHController($scope, $http, services) {
            $scope.getALife = function (){
                $http.get()
                    .then(function success(response){

                    }, function failure(response) {

                    });
            };

            $scope.save = function (user) {
                $http.put(BASE_URL + 'rest/userProfile/:id')
                    .then(function success(response){
                        $scope.user = response.user;
                    }, function failure(response) {

                    });
            };
        }
    );


    var services_mod = angular.module("services", []);

    services_mod.factory('services', function() {
        return {};
    });

})();