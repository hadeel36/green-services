angular.module('GS.serviceProvider', [])

.controller('serviceproviderController', function ($scope, Services) {
  $scope.data={};
  $scope.data.orders=[{order_id:"5",fullname:"eshraq",phoneNumber:"0799999",address:"amman",quentity:"2"},{order_id:"4",fullname:"hussam",phoneNumber:"079ddd9",address:"irbid",quentity:"3"}];
  	Services.getAllOrders().then(function(data){
  		
  	})
  	.catch(function(err){
  		console.error(err);
  	});
  $scope.delete=function(index){
  	console.log(index);
  	Services.delivered($scope.data.orders[index].order_id);//order_id depend on database
  }
});
