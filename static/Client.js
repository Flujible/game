export default class Client {
    socket = io();
    playerId;
    ctx;
    playerMovement = {
        up: false,
        left: false,
        down: false,
        right: false,
    };
    playerShootDirection;

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

        this.socket.on('state', state => {
            console.log(state.players[this.socket.id].projectiles)
            this.draw(state);
        })

        // Send movement data 60 times per second
        // Bypasses keypress lag for holding down a key 
        setInterval(() => {
            this.socket.emit('playerState', { move: this.playerMovement, shootDirection: this.playerShootDirection });
        }, 100/6);
    }

    beginMovePlayer(direction) {
        this.playerMovement[direction] = true;
    }

    endMovePlayer(direction) {
        this.playerMovement[direction] = false;
    }

    beginPlayerShoot(direction) {
        if(!this.playerShootDirection) {
            this.playerShootDirection = direction;
        }
    }

    endPlayerShoot(direction) {
        if(this.playerShootDirection === direction) {
            this.playerShootDirection = null;
        }
    }

    setupCanvas(canvas) {
        canvas.width = 650;
        canvas.height = 650;
        this.ctx = canvas.getContext('2d');
    }

    draw(state) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Object.keys(state.players).forEach(playerId => {
            const player = state.players[playerId];
            this.ctx.fillStyle = player.colour;
            this.ctx.fillRect(player.pos.x, player.pos.y, player.imgDimensions.width, player.imgDimensions.height);
        });
    }
}