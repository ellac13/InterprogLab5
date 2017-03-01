// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('View2Ctrl', function ($scope,Dinner) {

    $scope.numberOfGuests = Dinner.getNumberOfGuests();
    $scope.menu = Dinner.getFullMenu();

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.setNumberOfGuest = function(number){
        Dinner.setNumberOfGuests(number);
       //$scope.numberOfGuests = $scope.getNumberOfGuests();
    }

    $scope.removeDishFromMenu = function(id){
        Dinner.removeDishFromMenu(id);
    }

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