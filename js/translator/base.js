var WebApp  = angular.module('WebApp', ['ngSanitize']),
		cookie = Cookies.get('lang');

WebApp.controller('nav', function($scope){
	
	$scope.Es = { 
		//MENU titles
		menu001: 'Inicio',
		menu002: 'Landing page',
		menu003: 'Invitation from Co-Chairs',
		menu004: 'International Program Committee',
		menu005: 'Local Organizing Committee',
		menu006: 'Program',
		menu007: 'Speakers',
		menu008: 'Registration & Abstracts',
		menu009: 'Regular Conference Participants',
		menu010: 'Sponorship for Local Students',
		menu011: 'Organizing a Parallel Session ',
		menu012: 'Venue & Travel',
		menu013: 'Location',
		menu014: 'Venue',
		menu015: 'Accommodation',
		menu016: 'Getting Here',
		menu017: 'Visa Information',
		menu018: 'Travel and Health Insurance',
		menu019: 'Climate',
		menu020: 'Things to Do',
		menu021: 'Things to Do in Mexico City',
		menu022: 'Shopping',
		menu023: 'Transport',
		menu024: 'Security',
		menu025: 'Phone and Internet',
		menu026: 'Pre- and Post Conference Activities',
		menu027: 'Contact Us',
		menu028: 'Mailing List',
		menu029: 'News'
  }
  
	$scope.En = { 
		menu001: 'Home',
		menu002: 'Landing page',
		menu003: 'Invitation from Co-Chairs',
		menu004: 'International Program Committee',
		menu005: 'Local Organizing Committee',
		menu006: 'Program',
		menu007: 'Speakers',
		menu008: 'Registration & Abstracts',
		menu009: 'Regular Conference Participants',
		menu010: 'Sponorship for Local Students',
		menu011: 'Organizing a Parallel Session ',
		menu012: 'Venue & Travel',
		menu013: 'Location',
		menu014: 'Venue',
		menu015: 'Accommodation',
		menu016: 'Getting Here',
		menu017: 'Visa Information',
		menu018: 'Travel and Health Insurance',
		menu019: 'Climate',
		menu020: 'Things to Do',
		menu021: 'Things to Do in Mexico City',
		menu022: 'Shopping',
		menu023: 'Transport',
		menu024: 'Security',
		menu025: 'Phone and Internet',
		menu026: 'Pre- and Post Conference Activities',
		menu027: 'Contact Us',
		menu028: 'Mailing List',
		menu029: 'News'
  }
	
	if(cookie == undefined){
		$scope.Lang = $scope.Es;
		Cookies.set('lang', 'Es');
	} else if(cookie == 'Es') {
		$scope.Lang = $scope.Es;
	} else {
		Cookies.set('lang', 'En');
		$scope.Lang = $scope.En;
	}
	
	
	$scope.TxtLang = function(lang){
		switch(lang){
			case 'Es':
				$scope.Lang = $scope.Es;
				Cookies.set('lang', 'Es');
				window.location.reload();
				break
			case 'En':
				$scope.Lang = $scope.En;
				Cookies.set('lang', 'En');
				window.location.reload();
				break
			default:
				$scope.Lang = $scope.Es;
				break
		}
	}
})  