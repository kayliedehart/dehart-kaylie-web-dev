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
                template: 'does not exists'
            });
    });

    app.controller('LoginController',
        function LoginController($scope, services) {
            $scope.validate = function (user) {

            }
        }
    );

    app.controller('RegisterController',
        function RegisterController($scope, services) {

            $scope.userInfo = function (user) {

            }
        }
    );

    app.controller('ProfileController',
        function ProfileController($scope, services) {

            $scope.profileLoad = function (){

            };

            $scope.deleteConfirm = function () {

            };

            $scope.processMASH = function(user){

            };

        }
    );

    app.controller('MASHController',
        function MASHController($scope, services) {
            $scope.getALife = function (){

            };

            $scope.save = function (user) {

            };
        }
    );


    var services_mod = angular.module("services", []);

    services_mod.factory('services', function() {
        this.location = ['Boston, MA', 'San Fransisco, CA', 'New York City, NY', 'Washington, DC', 'Denver, CO'];
        this.age;
        this.major = ['Computer Science', 'Political Science', 'Physics', 'Engineering', 'English', 'Art', 'History'];
        this.gender = ['Female', 'Male', 'Non-Binary', 'Other'];
        this.orientation = ['Straight', 'Gay', 'Bisexual', 'Pansexual', 'Asexual'];
        return {};
    });

})();