var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

// INIT

$(document).ready(function init(){

	initBoard();
	games();
	ships();
	setInterval(placeShip(), 1);
});

// Click function to switch from tokens.

$('#signin').on('click', function(){
	token = $('#token').val();
	$('#signin').html("");
	$('#signin').html("<i id='loading'></i>");
	$('#loading').addClass('fa fa-spinner fa-spin');
	$.getJSON('https://zeeslagavans.herokuapp.com/users/me/games?token=' + token,
		function(data){
			if(data.msg){
				$('#accounterror').addClass('alert alert-danger').html('<b>Whoops!</b> You have entered an invalid token! Please try again!');
				$('#token').val("");
				$('#signin').html("Sign In");
			} 

			else{
				$('#myAccount').modal('hide');
				$('#accounterror').removeClass('alert alert-danger').html('');
				$('#token').val("");
				$('#signin').html("Sign In");
			}
		});
});

// Toggle the sidemenu.

$('#menu-icon').on('click', '.icon-menu', function(){
	if($('.icon-menu').hasClass('open')){
		$('.menu').animate({
			left: '-285px'
		}, 200);

		$('body').animate({
			left: '0px'
		}, 200);	
		$('.icon-menu').removeClass('open');	
	}

	else{
		$('.menu').animate({
			left: '0px'
		}, 200);

		$('body').animate({
			left: '285px'
		}, 200);
		$('.icon-menu').addClass('open');	
	}
});

// Get the games for the current user and display them in the sidemenu.

var games = function getMyGames(){
	$.getJSON('https://zeeslagavans.herokuapp.com/users/me/games?token=' + token,
		function(data){
			$('#games').append('<tbody>');
			for(var i = 0; i < data.length; i++){
				$('#games').append('<tr><td>' + data[i]._id + '</td><td>' + data[i].status + '</td><td>' + data[i].enemyName + '</td></tr></tbody>');
			}
			$('#games').append('</tbody>');
		});
}

var ships = function getShips(){
	$.getJSON('https://zeeslagavans.herokuapp.com/ships?token=' + token,
		function(data){
			for(var i = 0; i < data.length; i++){
				$('#ships').append('<li class="list-group-item"><button class="btn btn-primary btn-xs pull-left"><i class="fa fa-ship"></i></button><span class="badge">' + data[i].length + '</span><a href="#">' + data[i].name + '</a></li>');
			}
		});
}



// This function wil initiate the board.

function initBoard(){

	var xLength = 10;
	var yLength = 10;
	var charA = 97;
	var board;

	for(var x = charA; x < charA + xLength; x++ ){
		board += '<tr>';

		for(var y = 1; y <= yLength; y++){
			board += '<td id=' + String.fromCharCode(x) + y + ' class="square" onclick="fire(this.id)"></td>';
		}

		board += '</tr>';
	}

	$('#board').html(board);
}

// This function will let you fire at a specific point on the map.

function fire(id){

	if($('#' + id).hasClass('miss') || $('#' + id).hasClass('hit')){
		$('#message').html("You already targeted that spot!");
	}
	else if($('#' + id).hasClass('ship')){
		$('#' + id).addClass('hit');
		$('#message').html("HIT!");
	}

	else{
		$('#' + id).addClass('miss');
		$('#message').html("MISS!");
	}
}

// This function will select a ship so you can place it on the board.

function selectShip(id){
	

	console.log($('.active')[0]);	

	if(!$('.active')[0]){
		$(id).addClass('active');
	}
	else if($(id).hasClass('active')){
		$(id).removeClass('active');		
	}
	else{

		$('.active').removeClass('active');
		$(id).addClass('active');
	}
}

// This function will set the rotation of the ship.

function setShip(){


}

// This function will place ships on the board.

function placeShip(){

	$('#a1').mouseover(function(){
		$('#a1').addClass('shipshadow');
	});
	$('#a1').mouseout(function(){
		$('#a1').removeClass('shipshadow');
	});
}