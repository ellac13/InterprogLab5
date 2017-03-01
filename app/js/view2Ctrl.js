// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('View2Ctrl', function ($scope,Dinner) {

    $scope.numberOfGuests = Dinner.getNumberOfGuests();
    $scope.menu;

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    }

    $scope.setNumberOfGuest = function(number){
        Dinner.setNumberOfGuests(number);
        $scope.numberOfGuests = $scope.getNumberOfGuests();
    }

    $scope.removeDishFromMenu = function(id){
        console.log("Removing dish:" + id);
        Dinner.removeDishFromMenu(id);
        $scope.menu = $scope.getFullMenu();
        console.log($scope.menu);
    }

    $scope.getFullMenu = function(){
        $scope.menu = Dinner.getFullMenu();
        return Dinner.getFullMenu();
    }

});