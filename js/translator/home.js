var cookie = Cookies.get('lang');

WebApp.controller('home', function($scope){
	
	$scope.Es = { 
		txt1: 'Bienvenida',
  }
  
  $scope.En = { 
		txt1: 'Welcome',
  }
	
	
	if(cookie == undefined){
		$scope.Lang = $scope.Es;
	} else if(cookie === 'Es') {
		$scope.Lang = $scope.Es;
	} else {
		$scope.Lang = $scope.En;
	}
})  