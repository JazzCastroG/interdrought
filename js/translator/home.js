WebApp.controller('home', function($scope){
	
	$scope.homeEs = { 
		txt1: 'Bienvenida',
  }
  
  $scope.homeEn = { 
		txt1: 'welcome',
  }
  
  $scope.Lang = $scope.homeEs
	
	$scope.TxtLang = function(lang){
		switch(lang){
			case 'Es':
				$scope.Lang = $scope.homeEs;
				break
			case 'En':
				$scope.Lang = $scope.homeEn;
				break
			default:
				$scope.Lang = $scope.homeEs;
				break
		}
	}
})  