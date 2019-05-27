WebApp.controller('news', function($scope){
	
	$scope.homeEs = { 
		txt1: 'Noticias',
  }
  
  $scope.homeEn = { 
		txt1: 'News',
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