//

var FileListTransformApp = angular.module('FileListTransformApp', []);


FileListTransformApp.controller('FileListCtrl', function ($scope) {
	
	$scope.main = { inputtext: "Your Text Here", contents: "file1.txt\nfile2.txt\nfile3.txt\n", prependaction: false, appendaction: false };

	
	$scope.TransformText = function(transformMode) {
	
		// split content in text box by line
		var arrayOfLines = $scope.main.contents.split("\n");
		// clear data from text box
		$scope.main.contents = "";
		
		// for each element in array we'll write the new line 
		angular.forEach(arrayOfLines, function(value, key) {
		
		
			switch(transformMode){
			
				case 'prepend':
				
				// we only want to do this once
				if ($scope.main.prependaction === false){
				
					$scope.main.contents += $scope.main.inputtext + value + "\n";
					
				}else{
					// just pass it through
					$scope.main.contents += value + "\n";
				}				
				break;
				
				case 'append':
				
				// we only want to do this once
				if ($scope.main.appendaction === false){
				
					$scope.main.contents += value + $scope.main.inputtext + "\n";
					
				}else{
					// just pass it through
					$scope.main.contents += value + "\n";
				}
				
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
	}

});