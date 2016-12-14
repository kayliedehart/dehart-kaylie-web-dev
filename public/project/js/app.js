(function() {
    var app = angular.module("MASHApp", ["ngRoute", "ClientServices", "MASHServices"]);

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
        function LoginController($scope, $http, ClientServices) {
            ClientServices.readUserById(login);

            function login(response){

            }
        }
    );

    app.controller('RegisterController',
        function RegisterController($scope, $http, ClientServices) {

            $scope.location = ['Boston, MA', 'San Fransisco, CA', 'New York City, NY', 'Washington, DC', 'Denver, CO'];
            $scope.major = ['Computer Science', 'Political Science', 'Physics', 'Engineering', 'English', 'Art', 'History'];
            $scope.gender = ['Female', 'Male', 'Non-Binary', 'Other'];
            $scope.orientation = ['Straight', 'Gay', 'Bisexual', 'Pansexual', 'Asexual'];

            $scope.userInfo = function userInfo(user){
                ClientServices.createUser(user);
            }
        }
    );

    app.controller('ProfileController',
        function ProfileController($scope, $http, ClientServices) {

            $scope.profileLoad = function (){
                ClientServices.readUserById(renderUser);

                function renderUser(response) {
                    $scope.user = response;
                }
            };

            $scope.deleteConfirm = function () {
                ClientServices.deleteUserById(returnToLogin);

                function returnToLogin(response){

                }
            }


        }
    );

    app.controller('MASHController',
        function MASHController($scope, $http, ClientServices, MASHServices) {
            $scope.getALife = function (){
                MASHServices.constructScenario(renderScenario);

                function renderScenario(response){
                    $scope.user = response;
                }
            };

            $scope.save = function (user) {
                ClientServices.updateUserById(saveUser);

                function saveUser(response){
                    $scope.user = response;
                }
            }

        }
    );

})();