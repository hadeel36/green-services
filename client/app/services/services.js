angular.module('GS.services', [])

.factory('Orders', function ($http) {
  ////this function must executed when the client press on submit order button and after this save
  ////the order to the data base
  var addOneOrder = function (order) {
    return $http({
      method: 'POST',
      url: '/api/orders',
      data: JSON.stringify(order)
    })
    .then(function (resp) {
      return resp;
    });
  };
return {
    addOneOrder: addOneOrder
  };
})
.factory('Services',function($http){
  var getAllOrders = function(){
    return $http({
      method:'GET',
      url:'/api/services'
    })
  }
  return {
    getAllOrders:getAllOrders
  }
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signinUser = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signinUsers',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

 var signinServiceProvider = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signinServiceProvider',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signupUser = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signupUsres',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
 var signupServiceProvider = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signupServiceProvider',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
