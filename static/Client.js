export default class Client {
    socket = io();
    playerId;
    move = {
        up: false,
        down: false,
        left: false,
        right: false,
    }

    constructor() {
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

    beginMovePlayer(direction) {
        move[direction] = true;
    }
    
    endMovePlayer(direction) {
        move[direction] = false;
    }
}