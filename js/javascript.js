var key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

$(document).ready(function init(){

	initBoard();
	var ships = [["Minesweeper", 4, 2], ["Frigate", 4, 3], ["Cruiser", 2, 3], ["Battleship", 1, 4]];
});


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
function dropship(){

}
//This function will let you see where you will drop the ship
function dragOver(){

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