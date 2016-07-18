angular.module('GS.Users', [])

.controller('UserController', function ($scope, Orders) {
  // Your code here
  ///this function must call on submit click
  $scope.order = {};
  $scope.order.serviceType;
        $scope.getVal=function(event){
            $scope.order.serviceType=event.currentTarget.value;
        }
  $scope.order.fullName = 'samer';
  $scope.order.Address = 'irbid';
  $scope.addOrder=function(){
  	console.log($scope.order)
  	Orders.addOneOrder($scope.order).then(function(){
  	})
  	.catch(function(err){
  		console.log(err);
  	})
  }
});
