var cookie = Cookies.get('lang');

WebApp.controller('home', function($scope){
	
	$scope.Es = { 
		txt1: 'Bienvenida',
  }
  
  $scope.En = { 
		txt1: 'Welcome',
  }
	
	
	if(cookie == undefined || cookie === 'Es'){
		$scope.Lang = $scope.Es;
	} else {
		$scope.Lang = $scope.En;
	}
})  