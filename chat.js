$(function () {
	var socket = io();
	$('form').submit(function(){
		socket.emit('chat message', $("#nombre").val() +": " +  $('#m').val());
		$('#m').val('');
		return false;
	});
	socket.on('chat message', function(msg){
		$('#messages').append($('<div class="row message-bubble"><span>Why is yo shit so broke?</span></div>').text(msg));
	});
});