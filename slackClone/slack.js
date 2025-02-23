const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer)

io.of("/").on('connection',(socket)=>{
    console.log(socket.id,"has connected")
    socket.emit('welcome', "Welcome to the server")
})