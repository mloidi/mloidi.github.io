'use strict'

myApp.controller('TaskController', ['$scope', function($scope) {
	$scope.selectedFirstMenu = {code: "mo1", text: "Proyects"};
	$scope.day = moment();

	var firstMenuOptionsJSON = '{"menuOption": [{"code": "mo1", "text": "Proyects"},{"code": "mo2", "text": "Calendar"},{"code": "mo3", "text": "Team member"}]}';
	$scope.firstMenuOptions = JSON.parse(firstMenuOptionsJSON);

	$scope.selectFirstMenu = function(value) {
		$scope.selectedFirstMenu = value;
	};
	$scope.showArea = function (selectedOption) {
		if(selectedOption.code == $scope.selectedFirstMenu.code) {
			return true;
		}
		return false;
	}
	
	$scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i, type: "A"});
        $scope.models.lists.B.push({label: "Item B" + i, type: "B"});
    }
	
	$scope.type = "A";
	$scope.newItem = function (pLabel, pType){
		if(pType == "A") {
			$scope.models.lists.A.push({label: pLabel, type: pType});
		} else {
			$scope.models.lists.B.push({label: pLabel, type: pType});	
		}
	}
}]);