export default class Client {
    socket = io();
    playerId;
    ctx;

    constructor(canvas) {
        this.canvas =  canvas;
        this.setupCanvas(this.canvas);

        this.socket.io.on('connect_error', reason => {
            this.socket.disconnect();
            console.log(`CONNECT ERROR: ${reason}`);
        });
        
        this.socket.on('id', playerData => {
            this.player = playerData;
            console.log(`Connected: ${playerData.id}`);
        });
        
        this.socket.on('info', info => console.log(info));

        this.socket.on('playerLocations', players => {
            this.drawPlayers(players);
        })
    }

    movePlayer(direction) {
        this.socket.emit('move', direction);
    }

    setupCanvas(canvas) {
        canvas.width = 650;
        canvas.height = 650;
        this.ctx = canvas.getContext('2d');
    }

    drawPlayers(players) {
        console.log("draw players");
        this.ctx.fillStyle = '#FFF';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        Object.keys(players).forEach(playerId => {
            const player = players[playerId];
            console.log(player)
            this.ctx.fillStyle = player.colour;
            this.ctx.fillRect(player.pos.x, player.pos.y, player.imgDimensions.width, player.imgDimensions.height);
        });
    }
}