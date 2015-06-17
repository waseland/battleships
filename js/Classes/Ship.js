$(document).ready(function Ship(){

	var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

	function selectShip(id){
		switch(id) {
		    case 0:
		        $('#ship-image-container').html('<img src="img/patrolboat.png">');
		        break;
		    case 1:
		    	$('#ship-image-container').html('<img src="img/destroyer.png">');
		        break;
		    case 2:
		    	$('#ship-image-container').html('<img src="img/submarine.png">');
		        break;
		    case 3:
		    	$('#ship-image-container').html('<img src="img/battleship.png">');
		        break;
		    case 4:
		    	$('#ship-image-container').html('<img src="img/aircraftcarrier.png">');
		        break;
		    default:
		    	break;
		}
	}

	$.get('https://zeeslagavans.herokuapp.com/ships?token=' + token,
		function(data){
			for(var i = 0; i < data.length; i++){
				$('#ships').append('<li class="list-group-item" draggable="true" ondragstart="selectShip('+ data[i]._id + ')"><button id="orientation" class="btn btn-primary btn-xs pull-left"><i class="fa fa-ship"></i></button><span class="badge">' + data[i].length + '</span><a href="#">' + data[i].name + '</a></li>');
			}
		});
});

