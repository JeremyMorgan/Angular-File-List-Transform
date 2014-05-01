//

var FileListTransformApp = angular.module('FileListTransformApp', []);


FileListTransformApp.controller('FileListCtrl', function ($scope) {
	
	$scope.main = { inputtext: "Your Text Here", contents: "file1.txt\nfile2.txt\nfile3.txt\n", prependaction: false, appendaction: false, rollback: "" };
	
	$scope.TransformText = function(transformMode) {
	
		
	// if this is the first time we've run this
	if ($scope.main.prependaction == false){
	
		console.log("First Time");
		console.log("Prepend: " + $scope.main.prependaction);
		console.log("Append: " + $scope.main.appendaction);
		
		angular.forEach($scope.main.rollback.split("\n"), function(value, key){
		
			console.log(value);		
		});
		
		// split content in text box by line
		var initialArray = $scope.main.contents.split("\n");
		
		// put original data in model in case we want to roll it back
		console.log("Rollback: " + $scope.main.rollback.length);
		
		if ($scope.main.rollback.length == 0){
			$scope.main.rollback += $scope.main.contents;
		}
		
		// clear data from text box
		$scope.main.contents = "";		
		
		// for each element in array we'll write the new line 
		angular.forEach(initialArray, function(value, key) {
		
			switch(transformMode){
			
				case 'prepend':		
					$scope.main.contents += $scope.main.inputtext + value + "\n";	
				break;
				
				case 'append':				
					$scope.main.contents += value + $scope.main.inputtext + "\n";				
				break;
			}
		});
		
		// sets a flag so append/prepend is only performed once.
		switch(transformMode){		
			case 'prepend':
				$scope.main.prependaction = true;
			break;				
			case 'append':
				$scope.main.appendaction = true;
			break;
		}
	}else{
	
		// we roll it back
		console.log("Rollback");
		console.log("Prepend: " + $scope.main.prependaction);
		console.log("Append: " + $scope.main.appendaction);
				
		// split content in text box by line
		var rollbackArray = $scope.main.rollback.split("\n");
		
		// clear data from text box
		console.log("MAIN: " + $scope.main.contents);
		
		$scope.main.contents = "";
		
		// for each element in array we'll write the new line 
		angular.forEach(rollbackArray, function(value, key) {
		
			switch(transformMode){
			
				case 'prepend':
					//$scope.main.contents += $scope.main.inputtext + value + "\n";	
					$scope.main.contents += value + "\n";	
				break;
				
				case 'append':			
					//$scope.main.contents += value + $scope.main.inputtext + "\n";				
					$scope.main.contents += value + "\n";				
				break;
			}
		});
		
		// sets a flag so append/prepend is only performed once.
		switch(transformMode){		
			case 'prepend':
				$scope.main.prependaction = false;
			break;				
			case 'append':
				$scope.main.appendaction = false;
			break;
		}
	}
	}

});
