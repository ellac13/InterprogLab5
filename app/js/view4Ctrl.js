// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('View4Ctrl', function ($scope,$routeParams,Dinner) {
  
  $scope.currentDish;
  $scope.showGrid = true;
  $scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.getCurrentDish = function() {
		$scope.status = "Fetching dish...";
		Dinner.Dish.get({id:$routeParams.dishId},function(data){
			$scope.status = "";
			$scope.currentDish = data;
			$scope.showGrid = false;
		},function(data){
			$scope.status = "There was an error";
		});
	}

	$scope.getNumberOfGuests = function(){
		$scope.numberOfGuests = Dinner.getNumberOfGuests();
		return $scope.numberOfGuests;
	}

	$scope.getCurrentDishPrice = function(){
		return Dinner.getDishPrice($scope.currentDish);
	}

	$scope.addDishToMenu = function(id){
		Dinner.addDishToMenu(id);
	}

	$scope.getCurrentDish();
  
});