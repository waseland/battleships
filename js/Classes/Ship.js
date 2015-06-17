$(document).ready(function Ship(){

	var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InBqbWR1ZmZ5QGF2YW5zLm5sIg.3_74qaKqZl4lhjCAXyzZknR4OPpnTk6OzwdYaHN9OJw";

	$.get('https://zeeslagavans.herokuapp.com/ships?token=' + token,
		function(data){
			for(var i = 0; i < data.length; i++){
				$('#ships').append('<li class="list-group-item" draggable="true" ondragstart="selectShip('+ data[i]._id + ')"><button class="btn btn-primary btn-xs pull-left"><i class="fa fa-ship"></i></button><span class="badge">' + data[i].length + '</span><a href="#">' + data[i].name + '</a></li>');
			}
		});
});