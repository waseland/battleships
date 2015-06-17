$(document).ready(function Board(){

	var xLength = 10;
	var yLength = 10;
	var charA = 97;
	var board;

	for(var x = charA; x < charA + xLength; x++ ){
		board += '<tr>';

		for(var y = 1; y <= yLength; y++){
			board += '<td id=' + String.fromCharCode(x) + y + ' ondrop="dropShip(this.id)" ondragover="dragOver(this.id)" class="square" onclick="fire(this.id)"></td>';
		}

		board += '</tr>';
	}

	$('#board').html(board);
});
