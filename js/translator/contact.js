var cookie = Cookies.get('lang');

WebApp.controller('contact', function($scope){
	
	$scope.Es = { 
		txt1: 'Contact',
  }
  
  $scope.En = { 
		txt1: 'contact',
  }
	
	if(cookie == undefined || cookie === 'Es'){
		$scope.Lang = $scope.Es;
	} else {
		$scope.Lang = $scope.En;
	}
})  