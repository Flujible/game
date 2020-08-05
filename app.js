import express from 'express'
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import Game from './Game.js';

const __dirname = path.resolve();

const game = new Game();

const app = express();
const server = http.Server(app);
const io = socketIO(server, {
    allowRequest: (req, fn) => {
        Object.keys(game.players).length < 3 ? fn(200, true) : fn("Server full", false);
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
    game.createPlayer(socket.id);
    socket.emit('id', game.players[socket.id]);
    socket.broadcast.emit('info', game.players);

    socket.on('disconnect', reason => {
        game.removePlayer(socket.id);
        console.log("A player has disconnected")
        socket.broadcast.emit('info', `${reason} :: ${socket.id}`);
    });

    socket.on('playerState', ({ move, shootDirection }) => {
        const player = game.players[socket.id];
        player.move(move);
        if(shootDirection && player.canShoot) {
            player.shoot(shootDirection);
        }
    });

    setInterval(() => {
        Object.keys(game.state.players).forEach(key => {
            const player = game.state.players[key] 
            player.removeProjectiles();
        });
        io.sockets.emit('state', game.state);
    }, 100/6);
});