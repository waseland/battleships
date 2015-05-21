var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

// INIT

$(document).ready(function init(){

	initBoard();
	games();
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
			for(var i = 0; i < data.length; i++){
				$('#games').append("<tbody><tr><td>" + data[i]._id + "</td><td>" + data[i].status + "</td><td>" + data[i].enemyName + "</td></tr></tbody>");
			}
		});
}



// This function wil initiate the board.

function initBoard(){

	var xLength = 10;
	var yLength = 10;
	var board;

	for(var x = 0; x < xLength; x++ ){
		board += "<tr>";

		for(var y = 0; y < yLength; y++){
			board += "<td id='" + x + y + "' class='square' onclick='fire(this.id)'></td>";
		}

		board += "</tr>";
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

	if($('#00').on("mouseover")){
		$('#00').addClass('shipshadow');
	}
}