var cookie = Cookies.get('lang');

WebApp.controller('news', function($scope){
	
	$scope.homeEs = { 
		txt1: 'Noticias',
  }
  
  $scope.homeEn = { 
		txt1: 'News',
  }
	
	if(cookie == undefined){
		$scope.Lang = $scope.Es;
	} else if(cookie === 'Es') {
		$scope.Lang = $scope.Es;
	} else {
		$scope.Lang = $scope.En;
	}
})  