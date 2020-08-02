import express from 'express'
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
const __dirname = path.resolve();

let  players = [];
const app = express();
const server = http.Server(app);
const io = socketIO(server, {
    allowRequest: (req, fn) => {
        players.length < 3 ? fn(200, true) : fn("Server full", false);
    }
});

app.set('port', 5000);
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html');
});

server.listen(5000, () => {
    console.log("Server listening on port 5000")
});

io.on('connection', socket => {
    players.push(socket.id);
    socket.emit('id', socket.id);
    socket.broadcast.emit('info', players);

    socket.on('disconnect', reason => {
        players = players.filter(id => id !== socket.id)
        console.log("A player has disconnected")
        socket.broadcast.emit('info', `${reason} :: ${socket.id}`);
    })
});