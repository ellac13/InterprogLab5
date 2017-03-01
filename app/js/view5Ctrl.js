// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('View5Ctrl', function ($scope,Dinner) {

	$scope.menu = Dinner.getFullMenu();

    $scope.getFullMenu = function(){
        $scope.menu = Dinner.getFullMenu();
    }

    $scope.getDishPrice = function(id) {
        return Dinner.getDishInMenuPrice(id);
    }

    $scope.getTotalMenuPrice = function() {
        return Dinner.getTotalMenuPrice();
    }

});