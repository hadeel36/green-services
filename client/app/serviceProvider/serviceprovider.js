angular.module('GS.serviceProvider', [])

.controller('serviceproviderController', function ($scope, Services) {
  // Your code here
  $scope.data={};
  	Services.getAllOrders().then(function(data){
  		$scope.data.links=data;
  	})
  	.catch(function(err){
  		console.error(err);
  	});
  
});
