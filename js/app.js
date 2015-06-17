// INIT

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

$(document).ready(function init(){

	var d = new Date();

	$.getScript('js/Classes/Board.js', function(){
		console.log('[' + d.toTimeString().slice(0, -16) + '][LOAD] Board.js loaded!');
	});
	$.getScript('js/Classes/Game.js', function(){
		console.log('[' + d.toTimeString().slice(0, -16) + '][LOAD] Game.js loaded!');
	});
	$.getScript('js/Classes/GameList.js', function(){
		console.log('[' + d.toTimeString().slice(0, -16) + '][LOAD] GameList.js loaded!');
	});
	$.getScript('js/Classes/Ship.js', function(){
		console.log('[' + d.toTimeString().slice(0, -16) + '][LOAD] Ship.js loaded!');
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

// Click function to switch from tokens.

$('#signin').on('click', function(){
	token = $('#token').val();
	$('#signin').html("");
	$('#signin').html("<i id='loading'></i>");
	$('#loading').addClass('fa fa-spinner fa-spin');
	$.get('https://zeeslagavans.herokuapp.com/users/me/games?token=' + token,
		function(data){
			if(data.msg){
				$('#accounterror').addClass('alert alert-danger').html('<b>Whoops!</b> You have entered an invalid token! Please try again!');
				$('#token').val("");
				$('#signin').html("Sign In");
			} 

			else {
				$('#myAccount').modal('hide');
				$('#accounterror').removeClass('alert alert-danger').html('');
				$('#token').val("");
				$('#signin').html("Sign In");
			}
		});
});

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
	console.log($('.active')[0]);
}
//This function will drop the ship on the table
function dropship(id){
	console.log("dropped on: " + id)
}
//This function will let you see where you will drop the ship
function dragOver(id){
	console.log("dragged over: " + id)
}
// This function will set the rotation of the ship.

function setShip(id){


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