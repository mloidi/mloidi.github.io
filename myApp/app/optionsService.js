'use strict'

myApp.factory('OptionsService', [function() {

  var firstMenuOptionsJSON = '{"menuOption": [{"code": "mo1", "text": "Proyects"},{"code": "mo2", "text": "Calendar"},{"code": "mo3", "text": "Team member"}]}';

  var service = {
    getFirstMenuOptions: function () (
      return JSON.parse(firstMenuOptionsJSON);
    )
  };

  return service;
}]);