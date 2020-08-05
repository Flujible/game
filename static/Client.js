export default class Client {
    socket = io();
    player;
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

            player.projectiles.forEach(projectile => {
                this.ctx.strokeStyle = '#000';
                this.ctx.lineWidth = 10;
                this.ctx.fillRect(projectile.pos.x, projectile.pos.y, projectile.width, projectile.height);
            });
        });

        this.ctx.fillStyle = '#80b36f';
        state.enemies.forEach(enemy => {
            this.ctx.fillRect(enemy.pos.x, enemy.pos.y, enemy.imgDimensions.width, enemy.imgDimensions.height);
        })
    }
}