var cookie = Cookies.get('lang');

WebApp.controller('committee', function($scope){
	
	$scope.Es = { 
		txt1: 'Bienvenida',
		txt2: '',
		txt3: '',
		txt4: '',
		txt5: '',
		txt6: '',
		txt7: '',
		txt8: '',
		txt9: '',
		txt10: '',
		txt11: '',
		txt12: '',
		txt13: '',
		txt14: '',
		txt15: '',
		txt16: '',
		txt17: '',
		txt18: '',
		txt19: '',
		txt20: '',
		txt21: '',
		txt22: '',
		txt23: '',
		txt24: '',
		txt25: '',
		txt26: '',
		txt27: '',
		txt28: '',
		txt29: '',
		txt30: '',
		txt31: '',
		txt32: '',
		txt33: '',
		txt34: '',
		txt35: '',
		txt36: '',
		txt37: '',
		txt38: '',
		txt39: '',
		txt40: '',
		txt41: '',
		txt42: '',
		txt43: '',
		txt44: '',
		txt45: '',
  }
  
  $scope.En = { 
		txt20: 'Organising Committee',
		txt21: 'The conference is organized by BTC who will support participants on all aspects of registration, travel, accommodation, visa, travel insurance, poster printing, pre-and post-conference activities.',
		txt22: 'University of Queensland, Australia',
		txt23: 'Mark Cooper, Conference Deputy Chair',
		txt24: 'From CIMMYT Mexico',
		txt25: 'Aura Salinas: General Logistics',
		txt26: 'Barbara Maldonado: General Logistics',
		txt27: 'Clyde Beaver: Communication',
		txt28: 'Christal Gutierrez: Legal',
		txt29: 'Marianne Banziger: Overall Coordination',
		txt30: 'Matthew Reynolds: Field Day Program',
		txt31: 'Richard Fulss: Audio and Visual Equipment',
		txt32: 'Roberto Rocha: Budget Oversight and Coordination',
		txt33: 'Rosalba Delgado: Field Day Logistics',
		txt34: '',
		txt35: '',
		txt36: '',
		txt37: '',
		txt38: '',
		txt39: '',
		txt40: '',
		txt41: '',
		txt42: '',
		txt43: '',
		txt44: '',
		txt45: '',
  }
	
	if(cookie == undefined || cookie === 'Es'){
		$scope.Lang = $scope.Es;
	} else {
		$scope.Lang = $scope.En;
	}
})  // JavaScript Document