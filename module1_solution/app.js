'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	var vm = this;
	vm.lunch = "";
	vm.message = "";
	vm.good_flag = undefined;

	function drop_empty_items(lunch_items) {
		var no_of_items = lunch_items.length;
		for(var i=0 ; i < no_of_items; i++) {
			if(lunch_items[i].trim().length == 0)
			{
				lunch_items.splice(i,1);
				i--;
				no_of_items--;
			}
		}
	}

	vm.checkLunch = function() {
		var lunch_items = vm.lunch.split(',');
		// console.log(lunch_items);
		drop_empty_items(lunch_items);
		// console.log(lunch_items);
		if(lunch_items.length == 0) {
			vm.message = "Please enter data first";
			vm.good_flag = false;
		}
		else if(lunch_items.length <= 3 ) {
			vm.message = "Enjoy!";
			vm.good_flag = true;
		} else {
			vm.message = "Too much!";
			vm.good_flag = true;
		}
	};

	vm.clearMessage = function() {
		vm.message = "";
		vm.good_flag = undefined;
	};


}
