const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

let  players = [];
const app = express();
const server = http.Server(app);
const io = socketIO(server, {
    allowRequest: (req, fn) => {
        players.length < 3 ? fn(200, true) : fn("Server full", false);
    }
});

app.set('port', 5000);
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, () => {
    console.log("Server listening on port 5000")
});

io.on('connection', socket => {
    players.push(socket.id);
    socket.broadcast.emit('info', players);

    socket.on('disconnect', reason => {
        players = players.filter(id => id !== socket.id)
        console.log("A player has disconnected")
        socket.broadcast.emit('info', `${reason} :: ${socket.id}`);
    })
});