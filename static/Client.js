export default class Client {
    socket = io();
    playerId;
    ctx;
    playerMovement = {
        up: false,
        left: false,
        down: false,
        right: false,
    }

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

        // Send movement data 60 times per second
        // Bypasses keypress lag for holding down a key 
        setInterval(() => {
            this.socket.emit('move', this.playerMovement);
        }, 100/6);
    }

    beginMovePlayer(direction) {
        this.playerMovement[direction] = true;
    }

    endMovePlayer(direction) {
        this.playerMovement[direction] = false;
    }

    setupCanvas(canvas) {
        canvas.width = 650;
        canvas.height = 650;
        this.ctx = canvas.getContext('2d');
    }

    drawPlayers(players) {
        this.ctx.fillStyle = '#FFF';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        Object.keys(players).forEach(playerId => {
            const player = players[playerId];
            this.ctx.fillStyle = player.colour;
            this.ctx.fillRect(player.pos.x, player.pos.y, player.imgDimensions.width, player.imgDimensions.height);
        });
    }
}