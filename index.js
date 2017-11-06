
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('Un usuario se ha conectado');

  socket.broadcast.emit('hi');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('Un usuario se ha desconectado');
  });

});

http.listen(1000, function(){
  console.log('Escuchando en *:1000');
});	