'use strict'

myApp.directive('calendarArea', [function() {
	return {
		restrict: "E",
		templateUrl: "./app/html/calendarArea.html",
		scope: {
			selectedOption: "=",
			selectedDay: "="
		},
		link: function(scope) {
		
		}
	};
}]);