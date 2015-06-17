$(document).ready(function Game(){

	var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

	function games(){
		$.get('https://zeeslagavans.herokuapp.com/users/me/games?token=' + token,
		function(data){
			$('#games').append('<tbody class="text-center">');
			for(var i = 0; i < data.length; i++){
				$('#games').append('<tr><td>' + data[i]._id + '</td><td>' + data[i].status + '</td><td>' + data[i].enemyName + '</td><td class="text-center"><button class="btn btn-primary btn-xs"><i class="fa fa-gamepad"></i></button></td></tr>');
			}
			$('#games').append('</tbody>');
		});
	}

	games();

	$('#newgame').on('click', function(){
		$.get('http://zeeslagavans.herokuapp.com/games?token=' + token, function(data){
			if(!data.msg){
	        	$('#new-game-msg').addClass('alert alert-success').html('<b>Success!</b> New game has been created!').slideDown(400).delay(3000).slideUp(400);
	        	$('#games').html("");
	        	games();
			}
			else{
				$('#new-game-msg').addClass('alert alert-danger').html('<b>Whoops!</b> Something went wrong! Please try again!').slideDown(400).delay(3000).slideUp(400);
			}
		}) 
	});

	$('#newgameai').on('click', function(){
		$.get('http://zeeslagavans.herokuapp.com/games/AI?token=' + token, function(data){
			if(!data.msg){
	        	$('#new-game-msg').addClass('alert alert-success').html('<b>Success!</b> New game has been created!').slideDown(400).delay(3000).slideUp(400);
	        	$('#games').html("");
	        	games();
			}
			else{
				$('#new-game-msg').addClass('alert alert-danger').html('<b>Whoops!</b> Something went wrong! Please try again!').slideDown(400).delay(3000).slideUp(400);
			}
		}) 
	});

	$('#myGames').modal('show');

});