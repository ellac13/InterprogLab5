// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('View3Ctrl', function ($scope,Dinner) {

	console.log(Dinner.DishSearch.get());
	// TODO in Lab 5: you will need to implement a method that searchers for dishes
	// including the case while the search is still running.

	$scope.type = "appetizer";
	$scope.query = "";
	$scope.dishes;

	$scope.search = function(query,type) {
		//console.log('Searing with query ' + query + ' and type ' + type);
		$scope.status = "Searching...";
		Dinner.DishSearch.get({query:query,type:type},function(data){
			console.log(data);
			$scope.status = "Showing " + data.results.length + " results";
			$scope.dishes = data.results;
		},function(data){
			$scope.status = "There was an error";
		});
	}

	$scope.addDishToMenu = function(id){
		Dinner.addDishToMenu(id);
	}

	$scope.search($scope.query, $scope.type);

});