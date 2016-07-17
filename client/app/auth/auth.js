// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('GS.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signinUser = function () {
    Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

   $scope.signinServiceProvider = function () {
    Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/serviceprovider');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signupUser = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

    $scope.signupServiceProvider = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/Users');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
