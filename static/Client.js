export default class Client {
    socket = io();
    playerId;


        this.socket.io.on('connect_error', reason => {
            this.socket.disconnect();
            console.log(`CONNECT ERROR: ${reason}`);
        });
        
        this.socket.on('id', id => {
            this.playerId = id;
            console.log(`Connected: ${id}`);
        });
        
        this.socket.on('info', info => console.log(info));
    }

    movePlayer(direction) {
        this.socket.emit('move', direction);
    }

    }
    
    endMovePlayer(direction) {
        move[direction] = false;
    }
}